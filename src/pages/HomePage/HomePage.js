import './HomePage.css'

function HomePage() {
  return (
    <div className="container">
      <img
        src="https://res.cloudinary.com/dlij3u1jb/image/upload/v1724466948/DALL_E_2024-08-24_08.05.19_-_A_welcoming_homepage_image_for_a_web_application_named_CareerCarve_1x1_Scheduler._The_image_should_feature_a_modern_clean_design_with_a_focus_on_me_psvdgk.webp"
        className="image"
        alt="CareerCarve"
      />
      <div className="text-content">
        <h1>Welcome to CareerCarve 1x1 Scheduler</h1>
        <p>
          At CareerCarve, we connect MBA students with experienced mentors for
          personalized 1x1 mock interviews and career discussions. Start your
          journey towards success by booking your session today!
        </p>
        <p>
          <strong>Personalized Mentorship:</strong> Connect with industry
          experts who align with your career goals and get tailored advice to
          help you succeed.
        </p>
        <p>
          <strong>Flexible Scheduling:</strong> Choose a time that suits both
          you and your mentor, ensuring a smooth and convenient experience.
        </p>
        <p>
          <strong>Expert Guidance:</strong> Access a wide range of mentors
          across various MBA roles, ensuring you get the most relevant insights
          for your career path.
        </p>
        <p>
          <strong>Premium Options:</strong> Select preferred mentors for a more
          personalized experience with added premium features.
        </p>
        <p>
          <strong>Seamless Booking:</strong> A simple and user-friendly
          interface makes booking your session quick and hassle-free.
        </p>
      </div>
    </div>
  )
}

export default HomePage
