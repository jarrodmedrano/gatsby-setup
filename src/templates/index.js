import React, { Component } from "react"

export default ({ pageContext }) => (
  <div>
    {console.log(pageContext)}
    <h1>{pageContext.title}</h1>
  </div>
)
