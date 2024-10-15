import React from 'react'
import ourvision from '../assets/ourvision.webp'
import ourmision from '../assets/ourmision.avif'
import nikhil from '../assets/nikhil.jpg'
import rajat from '../assets/rajat.jpg'
import dev from '../assets/dev.jpg'

const About = ({isLoggedIn}) => {
  return (
    <div className = "  bg-richblack-900">
    {/* About Us Section */}
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl text-white font-bold mb-4">About StudyNotion</h1>
        <p className="text-xl text-richblack-25 max-w-2xl mx-auto">
          At StudyNotion, our mission is to make learning accessible, engaging, and collaborative. Whether you are preparing for exams, sharing knowledge, or looking for study partners, we’ve got you covered.
        </p>
      </div>
    </section>

    {/* Our Mission Section */}
    <section className="py-16 bg-richblack-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl text-blue-100 font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-richblack-100">
              Our mission is to provide students around the world with tools and resources that promote collaborative learning. We believe that education is a shared journey, and by helping one another, we can all achieve our academic goals.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={ourmision}
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Our Team Section */}
    <section className="py-16 bg-richblack-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-100 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
             width = "170px"
              height = "170px"
              src={nikhil}
              alt="Team Member"
              className="rounded-full bg-cover mx-auto mb-4"
            />
            <h3 className="text-xl text-blue-100 font-semibold mb-2">Nikhil Kumar</h3>
            <p className="text-richblack-100">Co-Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              width = "170px"
              height = "170px"
              src={rajat}
              alt="Team Member"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl text-blue-100 font-semibold mb-2">Rajat Chaudhary</h3>
            <p className="text-richblack-100">Head of Product</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
               width = "170px"
              height = "170px"
              src={dev}
              alt="Team Member"
              className="rounded-full mx-auto mb-4 "
            />
            <h3 className="text-xl text-blue-100 font-semibold mb-2">Dev Dutt Sharma</h3>
            <p className="text-richblack-100">Lead Developer</p>
          </div>
        </div>
      </div>
    </section>

    {/* Vision Section */}
    <section className="py-16 bg-richblack-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={ourvision}
              alt="Our Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl text-blue-100 font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-richblack-100">
              We envision a world where every student, regardless of background or location, has access to high-quality educational resources. By fostering collaboration and using technology, we aim to make learning not only more effective but also more enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 StudyNotion. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}

export default About