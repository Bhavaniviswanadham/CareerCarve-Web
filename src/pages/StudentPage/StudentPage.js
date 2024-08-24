import StudentCard from '../../components/StudentCard/StudentCard'
import './StudentPage.css'

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

function StudentPage() {
  return (
    <div className="student-page">
      <h2>Students Available</h2>
      {students.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  )
}

export default StudentPage
