import React from "react"
import {NavLink} from "react-router-dom"
import {NavWrapper} from "./NawWrapper"

export default function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li><NavLink to="/" exact={true}>Home</NavLink></li>
        <li><NavLink to="/sign-up">Sign up</NavLink></li>
        <li><NavLink to="/sign-in">Sign in</NavLink></li>
      </ul>
    </NavWrapper>
  )
}