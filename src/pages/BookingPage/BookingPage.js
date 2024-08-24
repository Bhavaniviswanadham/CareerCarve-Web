import MentorBooking from '../../components/MentorBooking/MentorBooking'
import './BookingPage.css'

const students = [
  {
    id: 1,
    name: 'Ariana Patel',
    country: 'Canada',
    freeTime: ['10:00 AM', '2:00 PM', '4:00 PM'],
    areaOfInterest: 'Digital Marketing',
  },
  {
    id: 2,
    name: 'David Smith',
    country: 'Canada',
    freeTime: ['11:00 AM', '3:00 PM', '5:00 PM'],
    areaOfInterest: 'Finance',
  },
  {
    id: 3,
    name: 'Emma Johnson',
    country: 'Canada',
    freeTime: ['9:00 AM', '1:00 PM', '3:00 PM'],
    areaOfInterest: 'Operations',
  },
  {
    id: 4,
    name: 'Liam Brown',
    country: 'Canada',
    freeTime: ['12:00 PM', '2:00 PM', '6:00 PM'],
    areaOfInterest: 'Marketing',
  },
  {
    id: 5,
    name: 'Olivia Taylor',
    country: 'Canada',
    freeTime: ['10:00 AM', '4:00 PM', '7:00 PM'],
    areaOfInterest: 'Human Resources',
  },
  {
    id: 6,
    name: 'Noah Wilson',
    country: 'Canada',
    freeTime: ['11:00 AM', '1:00 PM', '5:00 PM'],
    areaOfInterest: 'Sales',
  },
  {
    id: 7,
    name: 'Sophia Davis',
    country: 'Canada',
    freeTime: ['9:00 AM', '2:00 PM', '6:00 PM'],
    areaOfInterest: 'Consulting',
  },
  {
    id: 8,
    name: 'Jacob Martinez',
    country: 'Canada',
    freeTime: ['10:00 AM', '3:00 PM', '7:00 PM'],
    areaOfInterest: 'Supply Chain Management',
  },
  {
    id: 9,
    name: 'Mia Anderson',
    country: 'Canada',
    freeTime: ['12:00 PM', '4:00 PM', '6:00 PM'],
    areaOfInterest: 'Entrepreneurship',
  },
  {
    id: 10,
    name: 'Ethan Lewis',
    country: 'Canada',
    freeTime: ['11:00 AM', '2:00 PM', '5:00 PM'],
    areaOfInterest: 'Business Analytics',
  },
  {
    id: 11,
    name: 'Grace Roberts',
    country: 'UK',
    freeTime: ['9:00 AM', '1:00 PM', '4:00 PM'],
    areaOfInterest: 'Finance',
  },
  {
    id: 12,
    name: 'James Carter',
    country: 'UK',
    freeTime: ['10:00 AM', '2:00 PM', '5:00 PM'],
    areaOfInterest: 'Marketing',
  },
  {
    id: 13,
    name: 'Lily Walker',
    country: 'UK',
    freeTime: ['11:00 AM', '3:00 PM', '6:00 PM'],
    areaOfInterest: 'Operations',
  },
  {
    id: 14,
    name: 'Benjamin Scott',
    country: 'UK',
    freeTime: ['9:00 AM', '1:00 PM', '4:00 PM'],
    areaOfInterest: 'Human Resources',
  },
  {
    id: 15,
    name: 'Ella Green',
    country: 'UK',
    freeTime: ['10:00 AM', '2:00 PM', '7:00 PM'],
    areaOfInterest: 'Digital Marketing',
  },
  {
    id: 16,
    name: 'Lucas White',
    country: 'UK',
    freeTime: ['12:00 PM', '3:00 PM', '6:00 PM'],
    areaOfInterest: 'Sales',
  },
  {
    id: 17,
    name: 'Charlotte Harris',
    country: 'UK',
    freeTime: ['11:00 AM', '2:00 PM', '5:00 PM'],
    areaOfInterest: 'Consulting',
  },
  {
    id: 18,
    name: 'Oliver King',
    country: 'UK',
    freeTime: ['9:00 AM', '2:00 PM', '6:00 PM'],
    areaOfInterest: 'Supply Chain Management',
  },
  {
    id: 19,
    name: 'Ava Turner',
    country: 'UK',
    freeTime: ['10:00 AM', '1:00 PM', '4:00 PM'],
    areaOfInterest: 'Entrepreneurship',
  },
  {
    id: 20,
    name: 'William Adams',
    country: 'UK',
    freeTime: ['12:00 PM', '3:00 PM', '7:00 PM'],
    areaOfInterest: 'Business Analytics',
  },
]

const mentors = [
  {
    id: 1,
    name: 'Carlos Ruiz',
    country: 'Spain',
    availableTime: ['10:00 AM', '2:00 PM', '4:00 PM'],
    areasOfExpertise: ['Digital Strategy', 'Operations'],
  },
  {
    id: 2,
    name: 'Elena Petrova',
    country: 'Russia',
    availableTime: ['11:00 AM', '3:00 PM', '5:00 PM'],
    areasOfExpertise: ['Finance', 'Brand Management'],
  },
  {
    id: 3,
    name: 'Akira Tanaka',
    country: 'Japan',
    availableTime: ['9:00 AM', '1:00 PM', '3:00 PM'],
    areasOfExpertise: ['Human Resources', 'Sales'],
  },
  {
    id: 4,
    name: 'Fatima Al-Farsi',
    country: 'UAE',
    availableTime: ['12:00 PM', '2:00 PM', '6:00 PM'],
    areasOfExpertise: ['Consulting', 'Logistics'],
  },
  {
    id: 5,
    name: 'Liam Murphy',
    country: 'Ireland',
    availableTime: ['10:00 AM', '4:00 PM', '7:00 PM'],
    areasOfExpertise: ['Entrepreneurship', 'Data Analytics'],
  },
  {
    id: 6,
    name: 'Isabella Rossi',
    country: 'Italy',
    availableTime: ['11:00 AM', '1:00 PM', '5:00 PM'],
    areasOfExpertise: ['Marketing', 'Operations'],
  },
  {
    id: 7,
    name: 'Javier Fernandez',
    country: 'Mexico',
    availableTime: ['9:00 AM', '2:00 PM', '6:00 PM'],
    areasOfExpertise: ['Finance', 'E-commerce'],
  },
  {
    id: 8,
    name: 'Mia Lund',
    country: 'Sweden',
    availableTime: ['10:00 AM', '3:00 PM', '7:00 PM'],
    areasOfExpertise: ['Sales', 'Consulting'],
  },
  {
    id: 9,
    name: 'Ravi Patel',
    country: 'India',
    availableTime: ['12:00 PM', '4:00 PM', '6:00 PM'],
    areasOfExpertise: ['Supply Chain Management', 'Startups'],
  },
  {
    id: 10,
    name: 'Ana Oliveira',
    country: 'Brazil',
    availableTime: ['11:00 AM', '2:00 PM', '5:00 PM'],
    areasOfExpertise: ['Data Science', 'Human Resources'],
  },
  {
    id: 11,
    name: 'Thomas Müller',
    country: 'Germany',
    availableTime: ['9:00 AM', '1:00 PM', '4:00 PM'],
    areasOfExpertise: ['Finance', 'Consulting'],
  },
  {
    id: 12,
    name: 'Sophia Kim',
    country: 'South Korea',
    availableTime: ['10:00 AM', '2:00 PM', '5:00 PM'],
    areasOfExpertise: ['Marketing', 'Supply Chain Management'],
  },
  {
    id: 13,
    name: 'Mateo Garcia',
    country: 'Argentina',
    availableTime: ['11:00 AM', '3:00 PM', '6:00 PM'],
    areasOfExpertise: ['Sales', 'Leadership Development'],
  },
  {
    id: 14,
    name: 'Yara Hassan',
    country: 'Egypt',
    availableTime: ['9:00 AM', '1:00 PM', '4:00 PM'],
    areasOfExpertise: ['Digital Marketing', 'Social Media Strategy'],
  },
  {
    id: 15,
    name: "Declan O'Connor",
    country: 'Ireland',
    availableTime: ['10:00 AM', '2:00 PM', '7:00 PM'],
    areasOfExpertise: ['Logistics', 'Consulting'],
  },
  {
    id: 16,
    name: 'Ines Martins',
    country: 'Portugal',
    availableTime: ['12:00 PM', '3:00 PM', '6:00 PM'],
    areasOfExpertise: ['Finance', 'Business Intelligence'],
  },
  {
    id: 17,
    name: 'Kaito Nakamura',
    country: 'Japan',
    availableTime: ['11:00 AM', '2:00 PM', '5:00 PM'],
    areasOfExpertise: ['Human Resources', 'Product Development'],
  },
  {
    id: 18,
    name: 'Laila Siddiqui',
    country: 'Pakistan',
    availableTime: ['9:00 AM', '2:00 PM', '6:00 PM'],
    areasOfExpertise: ['Digital Marketing', 'Supply Chain Optimization'],
  },
  {
    id: 19,
    name: 'Ethan Nguyen',
    country: 'Vietnam',
    availableTime: ['10:00 AM', '1:00 PM', '4:00 PM'],
    areasOfExpertise: ['Entrepreneurship', 'Consulting'],
  },
  {
    id: 20,
    name: 'Marie Dubois',
    country: 'France',
    availableTime: ['12:00 PM', '3:00 PM', '7:00 PM'],
    areasOfExpertise: ['Business Analytics', 'Marketing'],
  },
]

const student = students[0] // Example student
const availableMentors = mentors.filter(mentor =>
  mentor.availableTime.some(time => student.freeTime.includes(time)),
)

function BookingPage() {
  return (
    <div className="booking-page">
      <h2>Book a Mentor</h2>
      <MentorBooking student={student} mentors={availableMentors} />
    </div>
  )
}

export default BookingPage
