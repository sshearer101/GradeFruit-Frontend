import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './Classes';
import NewAssignmentForm from './NewAssignmentForm';
import MessageBoard from './MessageBoard';


function Home({ user }) {
  if (user) {
    return (
      <div>
        <h1>Welcome, {user.full_name}!</h1>
        <h3> Grade Level: {user.grade_level}</h3>
        <img
          className="teacher-image"
          src={user.image_link}
          alt="teacherimage"
        />
        <div className="home-tabs">
          <div className="tabs-header">
            <Link to="/classes">Classes <Classes user={user}/> </Link>
          </div>
          <div className="tabs-header">
            <Link to="/assignments">Assignments <NewAssignmentForm user={user} /> </Link>
          </div>
          <div className="tabs-header">
            <Link to="/messages">Messages <MessageBoard user={user} /></Link>
          </div>
        </div>
      </div>
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
