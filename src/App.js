import './App.css'
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
  const production = 'https://ss-my-final-project.herokuapp.com/'
  const development = 'http://localhost:3000/'
  const url = process.env.NODE_ENV ? production : development

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`/me`).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        })
      }
    })
  }, [])

  // fetch("http://localhost:3000/profile", {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer <token>`,
  //   },
  // });

  if (!user) return <Login setUser={setUser}/>

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar user={user} setUser={setUser} />

      <main>
        {user ? (
          <div>
            <Switch>
              <Route exact path="/">
                <Home user={user} />
              </Route>

              {/* <Route exact path="/classes">
                <Classes />
              </Route> */}
            </Switch>
          </div>
        ) : (
          <div>
            <Switch>
              <Route path="/signup">
                <SignUp setUser={setUser}/>
              </Route>

              <Route path="/login">
                <Login setUser={setUser}/>
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        )}
      </main>
    </Router>
  )
}

export default App
