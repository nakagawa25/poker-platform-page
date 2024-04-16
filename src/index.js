import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import Stage from "./pages/Stage"
import About from "./pages/About"

import Admin from "./pages/Admin"
import Login from "./pages/Login"
import CategoriesProvider from "./contexts/CategoriesProvider"
import AuthorizationProvider from "./contexts/AuthorizationProvider"
import Error from "./pages/Error"

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/admin", element: <Admin /> },
  { path: "/", element: <Home /> },
  {
    path: "/stage/:id",
    element: <Stage />,
  },
  { path: "/about/", element: <About /> },
  { path: "*", element: <Error /> },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthorizationProvider>
      <CategoriesProvider>
        <RouterProvider router={router} />
      </CategoriesProvider>
    </AuthorizationProvider>
  </React.StrictMode>
)
