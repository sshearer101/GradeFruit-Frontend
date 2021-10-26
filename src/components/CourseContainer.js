import react from "react";

export default function CourseContainer({course}){
    console.log(course)
    // console.log(assignment)
    return(
        <div>
            <h1 className="schedule">{course.period} Period: {course.name}</h1>
            {/* <h3 className="assignments">Upcoming Assignments: {assignment.name}</h3> */}

        </div>
    )
}