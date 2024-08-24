import {useState} from 'react'
import './MentorBooking.css'

function MentorBooking({mentors}) {
  const [selectedMentor, setSelectedMentor] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleMentorSelection = mentor => {
    setSelectedMentor(mentor)
    setSelectedTime('')
  }

  const handleTimeChange = event => {
    setSelectedTime(event.target.value)
  }

  const handleBooking = () => {
    if (selectedMentor && selectedTime) {
      setShowPopup(true)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelectedMentor(null)
    setSelectedTime('')
  }

  return (
    <div className="mentor-booking">
      <h4 className="head">Available Mentors:</h4>
      {mentors.length > 0 ? (
        mentors.map(mentor => (
          <div key={mentor.id} className="mentor-card">
            <h5>{mentor.name}</h5>
            <p>Country: {mentor.country}</p>
            <p>Available Times:</p>
            <ul>
              {mentor.availableTime.map(time => (
                <li key={time}>
                  <label>
                    <input
                      type="radio"
                      name="mentor-time"
                      value={time}
                      checked={
                        selectedTime === time &&
                        selectedMentor?.id === mentor.id
                      }
                      onChange={handleTimeChange}
                      onClick={() => handleMentorSelection(mentor)}
                    />
                    {time}
                  </label>
                </li>
              ))}
            </ul>
            <p>Areas of Expertise: {mentor.areasOfExpertise.join(', ')}</p>
            {selectedMentor && selectedMentor.id === mentor.id && selectedTime && (
              <button type="button" onClick={handleBooking}>
                Book
              </button>
            )}
          </div>
        ))
      ) : (
        <p>No mentors available at the selected times.</p>
      )}

      {showPopup && (
        <div className="popup">
          <p>
            You are slot has been booked at {selectedTime} with{' '}
            {selectedMentor.name}.
          </p>
          <button type="button" onClick={closePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export default MentorBooking
