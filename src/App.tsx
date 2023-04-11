import React from "react"
import HomePage from "./pages/home/HomePage"
import "./App.css"
import HttpsRedirect from "react-https-redirect"

function App(): JSX.Element {
  return (
    <HttpsRedirect>
      <HomePage />
    </HttpsRedirect>
  )
}

export default App
