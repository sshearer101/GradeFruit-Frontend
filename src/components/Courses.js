import NewAssignmentForm from './NewAssignmentForm'
import { useState } from 'react'
import CourseContainer from './CourseContainer'

export default function Courses({ user, courses, assignments }) {
  

  return (
    <div>
      {courses.map((course) => (
        <CourseContainer course={course} key={course.id} />
      ))}
        {/* {assignments.map((assignment) => (
        <CourseContainer assignment={assignment} key={assignment.id} />
      ))} */}
      
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
