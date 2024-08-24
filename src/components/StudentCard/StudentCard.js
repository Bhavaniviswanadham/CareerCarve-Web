import './StudentCard.css'

function StudentCard({student}) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Available Times: {student.freeTime.join(', ')}</p>
    </div>
  )
}

export default StudentCard
