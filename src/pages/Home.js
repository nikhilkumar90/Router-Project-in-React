import React from 'react'
import { useNavigate } from 'react-router-dom'
import Collaboratelearning from '../assets/Collaborative Learning.jpg'
import Flexiblelearning from '../assets/Flexiblelearning.jpg'
import expertguidance from '../assets/Expert Guidance.avif'

const Home = ({isLoggedIn}) => {
  const navigate = useNavigate();

  function clickHandler(){
    navigate("/signup");
  }

  return (
    <div className= ' bg-richblack-900'>
         {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to StudyNotion</h1>
          <p className="text-xl mb-8">
            Your Ultimate Destination for Collaborative Learning and Academic Success.
          </p>
          <button 
          onClick={clickHandler}
          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why StudyNotion?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <img
                src={Collaboratelearning}
                alt="Collaborative Learning"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
              <p className="text-gray-600">
                Connect with peers and collaborate on projects and study sessions.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <img
                src={Flexiblelearning}
                alt="Flexible Study Options"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Flexible Study Options</h3>
              <p className="text-gray-600">
                Access learning materials anytime, anywhere with flexible options.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <img
                src={expertguidance}
                alt="Expert Guidance"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Get advice and mentorship from industry experts and educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                "StudyNotion has completely changed the way I learn. It's so easy to collaborate with classmates!"
              </p>
              <div className="text-right">
                <p className="font-bold">- Akshay</p>
                <p className="text-gray-600">Student, Computer Science</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                "I love the flexible study options! I can access materials whenever I want."
              </p>
              <div className="text-right">
                <p className="font-bold">- Anuj Gupta</p>
                <p className="text-gray-600">Student, Business Administration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join StudyNotion today and unlock endless learning opportunities!
          </p>
          <button 
          onClick={clickHandler}
          className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 StudyNotion. All rights reserved.</p>
          <p>Follow us on <a href="#" className="text-white underline">Twitter</a> | <a href="#" className="text-white underline">Instagram</a></p>
        </div>
      </footer>
    </div>
  )
}
 
export default Home