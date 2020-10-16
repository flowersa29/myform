import React, { useState } from "react"
import LoginForm from "./components/LoginForm"
import "./App.css"

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  }
  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("")
  const Login = (details) => {
    console.log(details)
  }

  const LogOut = () => {
    console.log("logout")
  }
  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            welcome,<span>{user.name}</span>
          </h2>
          <button>LogOut</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default App
