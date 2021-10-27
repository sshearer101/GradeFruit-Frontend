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
          <h1>{student.full_name}</h1>
          <h2>GPA: {student.grade}</h2>
          <h1>Schedule:</h1>
          <h3>Math: {student.math}</h3> 
          <h3>Science: {student.science}</h3>
          <h3>Language Arts: {student.language_arts}</h3>
          <h3>Social Studies: {student.social_studies}</h3>
        </div>
      </div>
    </div>
  )
}
