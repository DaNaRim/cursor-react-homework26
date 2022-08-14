import React from "react"
import Nav from "../Nav/Nav"
import {HomePageWrapper} from "./HomePageWrapper"

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Nav classname="nav"/>
      <div className="content">
        <h1>Home Page</h1>
      </div>
    </HomePageWrapper>
  )
}

export default HomePage
