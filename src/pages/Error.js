// Error.js
import React from "react"
import "./Error.css"

const Error = () => {
  return (
    <div className="errorContainer">
      <h1 className="errorTitle">Oops! Página não encontrada</h1>
      <p className="errorMessage">
        Parece que você tentou acessar uma página que não existe.
      </p>
      <p className="errorMessage">
        Verifique se o URL está correto ou retorne à{" "}
        <a href="/" className="errorLink">
          página inicial
        </a>
        .
      </p>
    </div>
  )
}

export default Error
