import './MentorCard.css'

function MentorCard({mentor}) {
  return (
    <div className="mentor-card">
      <h3>{mentor.name}</h3>
      <p>Available Slots: {mentor.availableTime.join(', ')}</p>
    </div>
  )
}

export default MentorCard
