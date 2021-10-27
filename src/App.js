import './App.css'
import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Courses from './components/Courses'
import MessageBoard from './components/MessageBoard'
import Students from './components/Students'

function App() {
  // const production = 'https://ss-my-final-project.herokuapp.com/'
  // const development = 'http://localhost:3000/'
  // const url = process.env.NODE_ENV ? production : development

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState('')
  const [assignments, setAssignments] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    fetch(`http://localhost:3000/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true)
          setUser(data.user)
          setStudents(data.user.students)
          setAssignments(data.user.assignments)
          setCourses(data.user.courses)
        })
      } else {
        console.log('please log in')
      }
    })
  }, [])

  function signup(
    full_name,
    grade_level,
    image_link,
    username,
    password,
    password_confirmation,
    role,
  ) {
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {
          full_name: `${full_name}`,
          grade_level: `${grade_level}`,
          image_link: `${image_link}`,
          username: `${username}`,
          password: `${password}`,
          password_confirmation: `${password_confirmation}`,
          role: `${role}`,
        },
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data.user)
          setLoggedIn(true)
          localStorage.setItem('jwt', data.jwt)
        })
      } else {
        console.log('form incorrectly filled out')
      }
    })
  }

  function login(username, password, role) {
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
          role: `${role}`,
        },
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log('hi' + data.jwt)
          setUser(data.user)
          setLoggedIn(true)
          localStorage.setItem('jwt', data.jwt)
        })
      } else {
        console.log('wrong username/password')
      }
    })
  }

  function logout() {
    localStorage.clear()
    setUser(null)
    setLoggedIn(false)
  }

  function addAssignment(name, assignment_link, due_date) {
    fetch(`/assignment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        assignment_link: `${assignment_link}`,
        due_date: `${due_date}`,
        course_id: `${courses.id}`,
      }),
    })
      .then((r) => r.json())
      .then((student) => {
        setStudents([...students, student])
      })
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar
        user={user}
        setUser={setUser}
        logout={logout}
        students={students}
      />

      <main>
        {loggedIn ? (
          <div>
            <Switch>
              <Route exact path="/">
                <Home user={user} students={students} />
              </Route>

              <Route exact path="/classes">
                <Courses
                  user={user}
                  students={students}
                  courses={courses}
                  assignments={assignments}
                  addAssignment={addAssignment}
                />
              </Route>

              {user.role === 'teacher' ? (
                <Route exact path="/students">
                  <Students
                    user={user}
                    students={students}
                    onSearch={setSearch}
                  />
                </Route>
              ) : (
                ' '
              )}

              <Route exact path="/messages">
                <MessageBoard user={user} students={students} />
              </Route>
            </Switch>
          </div>
        ) : (
          <div>
            <Switch>
              <Route path="/signup">
                <SignUp signup={signup} />
              </Route>

              <Route path="/login">
                <Login login={login} />
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
