import React, {useCallback} from "react"
import {Link} from "react-router-dom"
import lockImg from "../../assets/icons/padlock.png"
import {getLocalLoggedUser, getLocalUsers, setLocalLoggedUser} from "../../utils/localStorageFunctions"
import Nav from "../Nav/Nav"
import {FormWrapper} from "../theme/FormWrapper"
import {SignUpPageWrapper} from "./SignInPageWrapper"

const SignInPage = () => {

  const [email, setEmail] = React.useState(getLoggedUserEmail)
  const [password, setPassword] = React.useState(getLoggedUserPassword)
  const [rememberMe, setRememberMe] = React.useState(false)

  const [submitted, setSubmitted] = React.useState(false)
  const [errors, setErrors] = React.useState({})

  function getLoggedUserEmail() {
    const loggedUser = getLocalLoggedUser()
    return loggedUser && loggedUser.rememberMe ? loggedUser.email : ""
  }

  function getLoggedUserPassword() {
    const loggedUser = getLocalLoggedUser()
    return loggedUser && loggedUser.rememberMe ? loggedUser.password : ""
  }

  const validateForm = useCallback(() => {
    const errors = {}

    if (email === "") errors.email = "Email is required"
    if (password === "") errors.password = "Password is required"

    const users = getLocalUsers()

    let isValidEmail = false
    let isValidPassword = true
    users.forEach(user => {
      if (user.email === email) {
        isValidEmail = true
        if (user.password !== password) isValidPassword = false
      }
    })

    if (!isValidEmail) errors.emailIncorrect = "Cannot find user with this email"
    if (!isValidPassword) errors.passwordIncorrect = "Password is incorrect"

    setErrors(errors)
    return errors
  }, [email, password])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const errors = validateForm()

    if (Object.keys(errors).length !== 0) {
      setErrors(errors)
      return
    }

    const loggedUser = {
      email,
      password,
      rememberMe
    }

    setLocalLoggedUser(loggedUser)
    alert("You have successfully signed in!")
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    alert("You have successfully forgotten your password!")
  }

  return (
    <SignUpPageWrapper>
      <Nav/>
      <FormWrapper>
        <header>
          <div className="img_wrapper">
            <img src={lockImg} alt="lock"/>
          </div>
          <h1>Sign up</h1>
        </header>

        <div className="fields">
          <div className="input_wrapper">
            <input type="email"
                   name="email"
                   placeholder="Email address *"
                   title="Email address"
                   required
                   value={email}
                   onChange={e => setEmail(e.target.value)}
            />
            {submitted && errors.email && <div className="error">{errors.email}</div>}
            {submitted && !errors.email && errors.emailIncorrect &&
              <div className="error">{errors.emailIncorrect}</div>}
          </div>
          <div className="input_wrapper">
            <input type="password"
                   name="password"
                   placeholder="Password *"
                   title="Password"
                   required
                   value={password}
                   onChange={e => setPassword(e.target.value)}
            />
            {submitted && errors.password && <div className="error">{errors.password}</div>}
            {submitted && !errors.password && errors.passwordIncorrect &&
              <div className="error">{errors.passwordIncorrect}</div>}
          </div>
          <div className="input_wrapper">
            <div className="checkbox">
              <div className="checkbox_wrapper">
                <input type="checkbox" id="email-subscribe" onChange={e => setRememberMe(e.target.checked)}/>
                <label className="checkbox-sign" htmlFor="email-subscribe">&#10003;</label>
              </div>
              <label className="checkbox-desc" htmlFor="email-subscribe">Remember me</label>
            </div>
          </div>
          <p><span>*</span> - required</p>

          <button type="submit" onClick={handleSubmit}>Sign in</button>
        </div>

        <div className="links">
          <div className="link" onClick={handleForgotPassword}>Forgot password?</div>
          <Link to={"/sign-up"}>Don`t have an account? Sign Up</Link>
        </div>

        <footer>
          <p>Copyright &copy; Your website 2022.</p>
        </footer>
      </FormWrapper>
    </SignUpPageWrapper>
  )
}

export default SignInPage
