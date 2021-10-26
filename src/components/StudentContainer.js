import react from 'react'
import SearchBar from './SearchBar'

export default function StudentContainer({ student }) {

  return (
    <div>
      <div className="student-display-container">
        <img
          className="student-image"
          src={student.image_link}
          alt={student.image_link}
        />
        <div className="student-info">
          <h2>{student.full_name}</h2>
          <h2>{student.grade}</h2>
        </div>
      </div>
    </div>
  )
}
