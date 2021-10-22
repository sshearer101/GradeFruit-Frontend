import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

function NavBar({ user, setUser, logout }) {
  return (
    <div className="header">
      <div className="home-header">
        <Link to="/">Home</Link>
      </div>
      <div className="login-signup-header">
        {user ? (
          <div>
            <div>
              {/* <Link to="/prof">Profile</Link>  */}
              <button className="logout" onClick={logout}>
                Logout
              </button>
            </div>
            <div>
              <SearchBar user={user}/>
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
