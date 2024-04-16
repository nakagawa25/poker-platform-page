import React, { useState } from "react"
import "./Login.css"
import useAuthorizationContext from "../hooks/useAuthorizationContext"
import { useNavigate } from "react-router-dom"
import { getToken } from "../api/api"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setIsAuthenticated, setToken } = useAuthorizationContext()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const navigation = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = { username: username, password: password }

    getToken(user)
      .then(({ data }) => {
        localStorage.setItem("token", data.token)
        setToken(data.token)
        setIsAuthenticated(true)
        return navigation("/admin")
      })
      .catch((error) => {
        console.error("Erro ao fazer a solicitação:", error)
        alert("Login inválido")
      })
  }

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <div className="loginRow">
            <h2>Usuário</h2>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="loginRow">
            <h2>Senha</h2>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="loginRow">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
