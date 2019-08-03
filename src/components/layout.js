/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import MainMenu from "./MainMenu";

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu></MainMenu>
    {children}
  </div>
)