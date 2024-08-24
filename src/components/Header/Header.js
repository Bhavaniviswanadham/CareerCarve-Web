import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="brand-container">
        <h1>CareerCarve </h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/mentors">Mentors</Link>
        <Link to="/booking">Booking</Link>
      </nav>
    </header>
  )
}

export default Header
