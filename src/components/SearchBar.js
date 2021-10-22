import {useState} from "react"

export default function SearchBar({ user }){

    const [student, setStudent] = useState('')

    function handleSearch(e){
        e.preventDefault()
        user(student)
    }

    

    return(
        <div>
            <form className = "student-search" onSubmit={(e) => handleSearch(e)}>
        <h1>Student Search</h1>
        <input
          type="text"
          id="student"
          autoComplete="off"
          value={student}
          onChange={(e) => setStudent(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
        </div>

    )
}