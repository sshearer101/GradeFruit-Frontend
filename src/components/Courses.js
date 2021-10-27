import NewAssignmentForm from './NewAssignmentForm'
import { useState } from 'react'
import CourseContainer from './CourseContainer'

export default function Courses({ user, courses }) {
  const [scheduleForm, setScheduleForm] = useState(false)
  const [gpaForm, setGpaForm] = useState(false)

  function handleScheduleClick(e) {
    e.preventDefault()
    setScheduleForm(!scheduleForm)
  }

  function handleGPAClick(e) {
    e.preventDefault()
    setGpaForm(!gpaForm)
  }

  return (
    <div>
      {user.role === 'teacher' ? (
        <div>
          {courses.map((course) => (
            <CourseContainer
              course={course}
              key={course.id}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className="student-button-container">
            <button className="show-info-button" onClick={handleScheduleClick}>
              Show Schedule
            </button>
          </div>
          <div className="information-container">
            {scheduleForm ? (
              <div>
                <h2>Classes: </h2>
                <h4 className="student-classes">1st Period: {user.math} </h4>
                <h4 className="student-classes">
                  2nd Period: {user.social_studies}
                </h4>
                <h4 className="student-classes">
                  3rd Period: {user.language_arts}
                </h4>
                <h4 className="student-classes">4th Period: {user.science}</h4>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="student-button-container">
            <button className="show-info-button" onClick={handleGPAClick}>
              Show GPA
            </button>
          </div>
          <div className="information-container">
            {gpaForm ? <h3>GPA: {user.grade}</h3> : ''}
          </div>
        </div>
      )}
    </div>
  )
}

// if (user){
//   return (
//     <main>

//       {user.role === 'teacher' ? (
//         <div>

//         </div>
//       ) : (
//         <div>
//           <div className="grade-button-container">
//             <button className="show-grade-button" onClick={handleClick}>
//               Show Grades
//             </button>
//           </div>
//           <div className="tabs-header">
//             {form ? <h3>GPA: {user.grade}</h3> : ''}
//           </div>
//         </div>
//       )}
//     </main>
//   )
//         }
// else {
//     return (
//         <div>
//             hi
//         </div>
//     )
// }
// }
