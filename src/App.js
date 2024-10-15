import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Deshboard from "./pages/Deshboard";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import TestimonialPage from "./pages/TestimonialPage";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
 
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  
  <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar  isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>

        <Route path= "/" element = {<Home isLoggedIn = {isLoggedIn}/>}/>
        <Route path= "/about" element = {<About isLoggedIn = {isLoggedIn}/>}/>
        <Route path= "/course" element = {<Course isLoggedIn = {isLoggedIn}/>}/>
        <Route path= "/contact" element = {<Contact isLoggedIn = {isLoggedIn}/>}/>
        <Route path="/testimonialpage" element = {<TestimonialPage setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element = {<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/deshboard" element = {
          <PrivateRoute isLoggedIn = {isLoggedIn}  setIsLoggedIn={setIsLoggedIn}>
          <Deshboard />
          </PrivateRoute>
          } />



    </Routes>
  </div>

  )
}
 
export default App;
 