import react from 'react'
import SearchBar from './SearchBar'
import StudentContainer from './StudentContainer'

export default function Students({ user, students, onSearch }) {
  return (
    <div>
      <div className="search-bar">
        <SearchBar students={students} onSearch={onSearch} />
      </div>
      <h1 className="gradebook-header"> Gradebook </h1>

      {students.map((student) => (
        <StudentContainer student={student} key={student.id} />
      ))}
    </div>
  )
}
