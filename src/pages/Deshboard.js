import React from 'react';
import { useNavigate } from 'react-router-dom';
import  {toast} from "react-hot-toast";
import javascriptmasterclass from "../assets/javascriptmasterclass.avif"
import reactimage from '../assets/Reactimage.avif'
import datascienceimage from '../assets/datascienceimage.jpg'
import { FaSearch } from "react-icons/fa";

const Deshboard = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  function clickHandler() {
    setIsLoggedIn(false);
    toast.success("Logged Out")
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-600 text-white flex flex-col p-6">
        <h1 className="text-3xl font-bold mb-8">StudyNotion</h1>
        <nav className="space-y-4">
          <a href="#" className="block text-lg hover:bg-indigo-700 p-3 rounded-md">Dashboard</a>
          <a href="#" className="block text-lg hover:bg-indigo-700 p-3 rounded-md">My Courses</a>
          <a href="#" className="block text-lg hover:bg-indigo-700 p-3 rounded-md">Progress</a>
          <a href="#" className="block text-lg hover:bg-indigo-700 p-3 rounded-md">Settings</a>
        </nav>
        <div className="mt-auto">
          <button 
          onClick={clickHandler}
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="p-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            <FaSearch className='mr-5 h-[30px] w-[30px]'/>
          </div>
        </header>

        {/* Main Dashboard Area */}
        <main className="flex-1 p-6 bg-gray-100">
          {/* Stats Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Courses Completed</h3>
              <p className="text-4xl font-bold text-indigo-600">15</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Active Courses</h3>
              <p className="text-4xl font-bold text-indigo-600">3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Total Hours Studied</h3>
              <p className="text-4xl font-bold text-indigo-600">120</p>
            </div>
          </section>

          {/* Recent Courses */}
          <section>
            <h3 className="text-xl font-bold mb-6">Recent Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Course 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={javascriptmasterclass}
                  alt="Course 1"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">JavaScript Masterclass</h4>
                <p className="text-gray-600">Learn advanced JavaScript concepts and build complex projects.</p>
              </div>

              {/* Course 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={reactimage}
                  alt="Course 2"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">React for Beginners</h4>
                <p className="text-gray-600">Understand the basics of React and build your first application.</p>
              </div>

              {/* Course 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={datascienceimage}
                  alt="Course 3"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">Data Science with Python</h4>
                <p className="text-gray-600">Dive deep into data science concepts using Python and real-world datasets.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white text-gray-600 p-4 text-center">
          &copy; 2024 StudyNotion. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Deshboard;
