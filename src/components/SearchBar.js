import {useState} from "react"

export default function SearchBar({ student, onSearch}){

const [search, setSearch] = useState('')


    function handleSearch(e){
        e.preventDefault()
        onSearch(search)
    }


    return(
        <div>
            <form className = "student-search" onSubmit={(e) => handleSearch(e)}>
        <h1>Student Search</h1>
        <input
          type="text"
          id="student"
          placeholder="search students"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
        </div>

    )
}