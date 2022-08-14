import {BrowserRouter, Route} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import "./App.css"
import HomePage from "./components/HomePage/HomePage"
import SignInPage from "./components/SignInPage/SignInPage"
import SignUpPage from "./components/SignUpPage/SignUpPage"
import {darkTheme} from "./components/theme/theme"
import {GlobalStyle} from "./GlobalStyles"

function App() {
  return (
    <main>
      <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/sign-up" exact component={SignUpPage}/>
          <Route path="/sign-in" exact component={SignInPage}/>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  )
}

export default App
