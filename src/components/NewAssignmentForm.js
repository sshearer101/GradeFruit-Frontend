import { useState } from 'react';


export default function NewAssignmentForm(user, addAssignment) {
  const [name, setName] = useState('')
  const [assignment_link, setAssignmentLink] = useState('')
  const [grade, setGrade] = useState('')

  function handleAddAssignment(e) {
    e.preventDefault()
    addAssignment(name, assignment_link, grade)
  }

  return (
    <form onSubmit={handleAddAssignment}>
      <input
        className = "name-input"
        type = "text"
        placeholder="Add Assignment Title..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className = "assignment_link-input"
        type="text"
        placeholder="Add Assignment Link..."
        value={assignment_link}
        onChange={(e) => setAssignmentLink(e.target.value)}
      />
      <input
        className = "grade-input"
        name="grade"
        placeholder="Add Grade..."
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
    </form>
  )
}
