import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUp from "./SignUp";


function Login({ login }) {
  const [showLogin, setShowLogin] = useState(true);


  return (
    <div>
    
      {showLogin ? (
        <>
          <LoginForm login={login} />
       
          {/* <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p> */}
        </>
      ) : (
        <>
          <SignUp login={login} />
          {/* <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p> */}
        </>
      )}

    </div>
  );
}


export default Login;