import MentorCard from '../../components/MentorCard/MentorCard'
import './MentorPage.css'

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
function MentorPage() {
  return (
    <div className="mentor-page">
      <h2>Mentors Available</h2>
      {mentors.map(mentor => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  )
}
export default MentorPage
