/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Header from "./header"
import MainMenu from "./MainMenu";

export default ({ children }) => (
  <div>
    <MainMenu></MainMenu>
    {children}
  </div>
)