import react from 'react'
import SearchBar from './SearchBar'
import StudentContainer from './StudentContainer'

export default function Students({ user, students, onSearch }) {
  return (
    <div>
      {user.role === 'teacher' ? (
        <div>
          <div className="search-bar">
            <SearchBar students={students} onSearch={onSearch} />
          </div>
          <h1 className="gradebook-header"> Roster </h1>

          {students.map((student) => (
            <StudentContainer student={student} key={student.id} />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
