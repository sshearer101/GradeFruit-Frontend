import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUp from './SignUp'

function Login({ login }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm login={login} />
        </>
      ) : (
        <>
          <SignUp login={login} />
        </>
      )}
    </div>
  )
}

export default Login
