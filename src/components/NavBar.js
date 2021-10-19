import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  
    return (
      <div className = "header">
        <div className = "home-header">
          <Link to="/">Home</Link>
        </div>
        <div className = "login-signup-header">
          {user ? (
              <div>
                  <Link to="/students">Students</Link> 
                  <button onClick={handleLogoutClick}>Logout</button> 
              </div>
            
  
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    );
  }
  
  export default NavBar;
  