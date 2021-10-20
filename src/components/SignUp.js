import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignUp({ signup }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [role, setRole] = useState('')

  function handleSubmitSignup(e) {
    e.preventDefault()
    signup(username, password, passwordConfirmation, role)
  }

  return (
    <div>
      {/* <div>
            <img className = "sign-up-img" src = "./Images/Logo.png" alt = "e-marker-logo"/>
        </div> */}
      <form onSubmit={(e) => handleSubmitSignup(e)}>
        <h1>Sign Up</h1>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="role">Role</label>
        <select value={setRole.value}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
