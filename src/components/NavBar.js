import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ user, setUser, logout, students }) {
  return (
    
    <div className="header">
      <div className="home-header">
        <Link to="/">Home</Link>
      </div>
      <Link to="/students">Students</Link>

      <Link to="/classes">Classes</Link>

      <div className="login-signup-header">
        {user ? (
          <div>
            <div>
              <button className="logout" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
