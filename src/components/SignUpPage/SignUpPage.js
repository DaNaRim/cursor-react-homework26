import React, {useCallback} from "react"
import {Link} from "react-router-dom"

import lockImg from "../../assets/icons/padlock.png"
import {addLocalUser, getLocalUsers} from "../../utils/localStorageFunctions"
import Nav from "../Nav/Nav"
import {FormWrapper} from "../theme/FormWrapper"
import {SignUpPageWrapper} from "./SignUpPageWrapper"

const SignUpPage = () => {
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [isEmailSubscribe, setIsEmailSubscribe] = React.useState(false)

  const [submitted, setSubmitted] = React.useState(false)
  const [errors, setErrors] = React.useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const errors = validateForm()

    if (Object.keys(errors).length !== 0) {
      setErrors(errors)
      return
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
      isEmailSubscribe
    }
    addLocalUser(user)

    alert("You have successfully signed up!")
  }

  const validateForm = useCallback(() => {
    const MIN_FIRST_NAME_LENGTH = 3
    const MIN_LAST_NAME_LENGTH = 3
    const MIN_PASSWORD_LENGTH = 8

    const EMAIL_REGEX = /^(.{3,})@(.{2,})\.(.{2,})$/

    const errors = {}

    if (firstName === "") errors.firstName = "First name is required"
    if (lastName === "") errors.lastName = "Last name is required"
    if (email === "") errors.email = "Email is required"
    if (password === "") errors.password = "Password is required"
    if (confirmPassword === "") errors.confirmPassword = "Confirm password is required"

    if (firstName !== "" && firstName.length < MIN_FIRST_NAME_LENGTH) {
      errors.firstNameLength = "First name must be at least 3 characters"
    }
    if (lastName !== "" && lastName.length < MIN_LAST_NAME_LENGTH) {
      errors.lastNameLength = "Last name must be at least 3 characters"
    }
    if (password !== "" && password.length < MIN_PASSWORD_LENGTH) {
      errors.passwordLength = "Password must be at least 8 characters"
    }

    if (email !== "" && !email.match(EMAIL_REGEX)) errors.emailFormat = "Email is invalid"
    if (confirmPassword !== "" && password !== confirmPassword) errors.passwordMatches = "Passwords do not match"

    const emails = getLocalUsers().map(user => user.email)
    if (emails.includes(email)) errors.emailExists = "User with this email already exists"

    setErrors(errors)
    return errors
  }, [firstName, lastName, email, password, confirmPassword])

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
          <fieldset>
            <div className="input_wrapper">
              <input type="text"
                     className={(submitted && errors.firstName) || errors.firstNameLength ? "incorrect" : "correct"}
                     name="firstName"
                     placeholder="First name *"
                     title="First name"
                     required
                     onChange={e => setFirstName(e.target.value)}/>
              {submitted && errors.firstName && <p className="error">{errors.firstName}</p>}
              {submitted && !errors.firstName && errors.firstNameLength &&
                <p className="error">{errors.firstNameLength}</p>}
            </div>

            <div className="input_wrapper">
              <input type="text"
                     className={(submitted && errors.lastName) || errors.lastNameLength ? "incorrect" : "correct"}
                     name="lastName"
                     placeholder="Last name *"
                     title="Last name"
                     required
                     onChange={e => setLastName(e.target.value)}/>
              {submitted && errors.lastName && <p className="error">{errors.lastName}</p>}
              {submitted && !errors.lastName && errors.lastNameLength
                && <p className="error">{errors.lastNameLength}</p>
              }
            </div>
          </fieldset>

          <div className="input_wrapper">
            <input type="email"
                   className={(submitted && errors.email) || errors.emailFormat ? "incorrect" : "correct"}
                   name="email"
                   placeholder="Email address *"
                   title="Email address"
                   required
                   onChange={e => setEmail(e.target.value)}/>
            {submitted && errors.email && <p className="error">{errors.email}</p>}
            {submitted && !errors.email && errors.emailFormat && <p className="error">{errors.emailFormat}</p>}
            {submitted && !errors.email && errors.emailExists && <p className="error">{errors.emailExists}</p>}
          </div>
          <div className="input_wrapper">
            <input type="password"
                   className={(submitted && errors.password) || errors.passwordLength ? "incorrect" : "correct"}
                   name="password"
                   placeholder="Password *"
                   title="Password"
                   required
                   onChange={e => setPassword(e.target.value)}/>
            {submitted && errors.password && <p className="error">{errors.password}</p>}
            {submitted && !errors.password && errors.passwordLength && <p className="error">{errors.passwordLength}</p>}
          </div>
          <div className="input_wrapper">
            <input type="password"
                   className={(submitted && errors.confirmPassword) || errors.passwordMatches ? "incorrect" : "correct"}
                   name="confirmPassword"
                   placeholder="Confirm password *"
                   title="Confirm password"
                   required
                   onChange={e => setConfirmPassword(e.target.value)}/>
            {submitted && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            {submitted && !errors.confirmPassword && errors.passwordMatches
              && <p className="error">{errors.passwordMatches}</p>
            }
          </div>
          <div className="input_wrapper">
            <div className="checkbox">
              <div className="checkbox_wrapper">
                <input type="checkbox" id="email-subscribe" onChange={e => setIsEmailSubscribe(e.target.checked)}/>
                <label className="checkbox-sign" htmlFor="email-subscribe">&#10003;</label>
              </div>
              <label className="checkbox-desc" htmlFor="email-subscribe">
                I want to receive inspiration, marketing promotions and updates via email.
              </label>
            </div>
          </div>
          <p><span>*</span> - required</p>

          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>

        <div className="links">
          <Link to={"/sign-in"}>Already have an account? Sign in</Link>
        </div>

        <footer>
          <p>Copyright &copy; Your website 2022.</p>
        </footer>
      </FormWrapper>


    </SignUpPageWrapper>
  )
}

export default SignUpPage

