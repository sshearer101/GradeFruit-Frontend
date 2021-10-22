import { useState } from 'react'
import { Link } from 'react-router-dom'
import Classes from './Classes'
import MessageBoard from './MessageBoard'
import Assignments from './Assignments'
import NewAssignmentForm from './NewAssignmentForm'

function Home({ user }) {

  const [scheduleForm, setScheduleForm] = useState(false)
  const [gpaForm, setGpaForm] = useState(false)
  const [assignmentForm, setAssignmentForm] = useState(false)

  function handleGPAClick(e) {
    e.preventDefault()
    setGpaForm(!gpaForm)
  }

  function handleScheduleClick(e) {
    e.preventDefault()
    setScheduleForm(!scheduleForm)
  }

  function handleAssignmentClick(e) {
    e.preventDefault()
    setAssignmentForm(!assignmentForm)
  }


  if (user) {
    return (
      <main className="home-page">
        {user.role === 'teacher' ? (
          //teacher home

          <div>
            <h1>Welcome, {user.full_name}!</h1>
            <h3> Grade Level: {user.grade_level}</h3>
            <h3> Subject: {user.subject}</h3>

            <img
              className="teacher-image"
              src={user.image_link}
              alt="teacherimage"
            />
            <div className="home-tabs">
              <div className="class-link">
                <Link to="/classes">
                  Classes <Classes user={user} />
                </Link>
              </div>
              <div className="tabs-header">
                <Link to="/messages">
                  Messages <MessageBoard user={user} />
                </Link>
              </div>
              <div className="assignment-button-container">
            <button className="add-assignment-button" onClick={handleAssignmentClick}>
              Add Assignment
            </button>
          </div>
          <div className="tabs-header">
            {assignmentForm ? <NewAssignmentForm user={user} /> : ''}
          </div>
            </div>
          </div>
        ) : (
          //student home

          <div>
            {console.log(user)}
            <h1>Welcome, {user.full_name}!</h1>
            <h3> Grade Level: {user.grade_level}</h3>
            <img
              className="teacher-image"
              src={user.image_link}
              alt="teacherimage"
            />
            <div className="home-tabs">
            <div className="schedule-button-container">
                <button className="show-schedule-button" onClick={handleScheduleClick}>
                  Show Schedule
                </button>
              </div>
              <div className="schedule-container">
                {scheduleForm ? <h3>Classes: 
                  {user.math}
                  {user.social_studies}
                  {user.language_arts}
                  {user.science}
                  </h3> : ''}
              </div>
              <div className="grade-button-container">
                <button className="show-grade-button" onClick={handleGPAClick}>
                  Show Grades
                </button>
              </div>
              <div className="tabs-header">
                {gpaForm ? <h3>GPA: {user.grade}</h3> : ''}
              </div>
              <div className="tabs-header">
                <Link to="/assignments">
                  Current Assignments <Assignments user={user} />{' '}
                </Link>
              </div>
              <div className="tabs-header">
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
