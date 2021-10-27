import { useState } from 'react'

export default function NewAssignmentForm(addAssignment) {
  const [name, setName] = useState('')
  const [assignment_link, setAssignmentLink] = useState('')
  const [due_date, setDueDate] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addAssignment(name, assignment_link, due_date)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="name-input"
        type="text"
        placeholder="Add Assignment Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="assignment_link-input"
        type="text"
        placeholder="Add Assignment Link..."
        value={assignment_link}
        onChange={(e) => setAssignmentLink(e.target.value)}
      />
      <input
        className="date-input"
        type="text"
        placeholder="Add Due Date..."
        value={due_date}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" name="submit">
        {' '}
        Submit{' '}
      </button>
    </form>
  )
}
