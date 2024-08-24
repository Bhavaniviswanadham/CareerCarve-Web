import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import StudentPage from './pages/StudentPage/StudentPage'
import MentorPage from './pages/MentorPage/MentorPage'
import BookingPage from './pages/BookingPage/BookingPage'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/students" component={StudentPage} />
          <Route path="/mentors" component={MentorPage} />
          <Route path="/booking" component={BookingPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
