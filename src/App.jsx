import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Docs from "./Components/Docs"
import Tutorial from "./Components/Tutorial"
import Blog from "./Components/Blog"
import Community from "./Components/Community"

const GlobalStyle = createGlobalStyle`
  ${reset};
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={Main} />
        <Route path="/docs" exact component={Docs} />
        <Route path="/tutorial" exact component={Tutorial} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/community" exact component={Community} />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
