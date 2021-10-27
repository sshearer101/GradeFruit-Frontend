import { useState } from 'react'
import Assignments from './Assignments'
import NewAssignmentForm from './NewAssignmentForm'

export default function CourseContainer({ course }) {

console.log(course)

    const [assignments, setAssignments] = useState([])

  const [assignmentForm, setAssignmentForm] = useState(false)
  const course_assignments = course.assignments

  function handleAssignmentClick(e) {
    e.preventDefault()
    setAssignmentForm(!assignmentForm)
  }

  function addAssignment(assignment) {
    fetch(`/assignments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      ...assignment,
        course_id: `${course.id}`,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setAssignments([...assignments, data])
      })
  }

  return (
    <div>
      <h1 className="schedule">
        {course.period} Period: {course.name}
      </h1>

      {course_assignments.map((assignment) => (
        <Assignments assignment={assignment} key={assignment.id} />
      ))}

<div className="assignment-button-container">
        <button
          className="add-assignment-button"
          onClick={handleAssignmentClick}
        >
          Add Assignment
        </button>
      </div>
      <div className="tabs-header">
        {assignmentForm ? (
          <NewAssignmentForm addAssignment={addAssignment} />
        ) : (
          ''
        )}
      </div>

    </div>
  )
}
