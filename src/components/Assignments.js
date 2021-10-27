
export default function Assignments(assignment) {


  return (
    <div>
      <h3 className="assignment-name">
        Assignment: {assignment.assignment.name}
      </h3>
      <li className="due-date">Due Date: {assignment.assignment.due_date}</li>
    </div>
  )
}
