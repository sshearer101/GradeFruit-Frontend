import NewAssignmentForm from './NewAssignmentForm'
import { useState } from 'react'

export default function Classes({ user }) {


  console.log(user)
  
if (user){
  return (
    <main>
      {user.role === 'teacher' ? (
        <div>
         
        </div>
      ) : (
        <div>
          {/* <div className="grade-button-container">
            <button className="show-grade-button" onClick={handleClick}>
              Show Grades
            </button>
          </div>
          <div className="tabs-header">
            {form ? <h3>GPA: {user.grade}</h3> : ''}
          </div> */}
        </div>
      )}
    </main> 
  )
        }
else {
    return (
        <div>
            hi
        </div>
    )
}
}
