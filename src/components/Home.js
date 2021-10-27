import { useState } from 'react'
import { Link } from 'react-router-dom'
import MessageBoard from './MessageBoard'
import Assignments from './Assignments'

function Home({ user, students }) {
  // const [gpaForm, setGpaForm] = useState(false)

  // function handleGPAClick(e) {
  //   e.preventDefault()
  //   setGpaForm(!gpaForm)
  // }

 

  if (user) {
    return (
      <main className="home-page">
        {user.role === 'teacher' ? (
          //teacher home

          <div>
            <h1 className="teacher-title">Welcome, {user.full_name}!</h1>
            <h3 className="teacher-title"> Grade Level: {user.grade_level}</h3>
            <h3 className="teacher-title"> Subject: {user.subject}</h3>

            <img
              className="teacher-image"
              src={user.image_link ? user.image_link : "../images/welcome.jpeg"}
              alt="teacherimage"
            />
            <div className="home-tabs">
              <div className="messages-link">
                <Link to="/messages">
                  Messages <MessageBoard user={user} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          //student home

          <div>
            <h1>Welcome, {user.full_name}!</h1>
            <h3> Grade Level: {user.grade_level}</h3>
            <img
              className="teacher-image"
              src={user.image_link}
              alt="teacherimage"
            />
            <div className="home-tabs">
             
              <div className="home-tabs">
              </div>
              <div className="messages-link">
                <Link to="/messages">
                  Messages <MessageBoard user={user} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    )
  } else {
    return (
      <div>
        {/* <img className="logo-img" src="./Images/Logo.png" alt="e-marker-logo" />
        <h5 className="home-page-desc">
          {' '}
          The number one online platform for teachers to track students progress
          and activities{' '}
        </h5> */}
        <h5 className="footer-text">
          Terms & Conditions | Privacy Policy | Notice of Privacy Practices |
          Consents{' '}
        </h5>
      </div>
    )
  }
}

export default Home
