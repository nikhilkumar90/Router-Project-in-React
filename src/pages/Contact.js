import React from 'react'

const Contact = ({isLoggedIn}) => {
  return (
    <div className="  bg-richblack-900">
     <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We'd love to hear from you! Whether you have a question or need assistance, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-200 shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">Your Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">Your Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Our Contact Information</h2>
              <p className="text-lg text-richblack-200">
                Reach out to us using the following contact information. We are happy to assist you.
              </p>
              <div className='text-richblack-25'>
                <p className="font-semibold">Address:</p>
                <p>Noida, Sector - 73 </p>
              </div>
              <div className='text-richblack-25'>
                <p className="font-semibold">Phone:</p>
                <p>9027940976</p>
              </div>
              <div className='text-richblack-25'>
                <p className="font-semibold">Email:</p>
                <p>nikhildevra1921@gmail.com</p>
              </div>
            </div>

            {/* Optional Image */}
           
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 StudyNotion. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
  </div>
  )
}

export default Contact