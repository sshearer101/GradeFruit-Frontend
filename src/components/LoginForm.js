import React, { useState } from "react";

function LoginForm({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("")

function handleSubmitLogin(e){
    e.preventDefault()
    login(username, password, role)
}

  return (
    <div>
        {/* <div>
            <img className = "login-img" src = "./Images/Logo.png" alt = "e-marker-logo"/>
        </div> */}
      <form onSubmit={(e) => handleSubmitLogin(e)}>
        <h1 className = "login-name">Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <label htmlFor="role">Role</label>
        <select value={setRole.value}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;