import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Deshboard from "./pages/Deshboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
 
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  
  <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar  isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>

        <Route path= "/" element = {<Home isLoggedIn = {isLoggedIn}/>}/>
        <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element = {<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/deshboard" element = {
          <PrivateRoute isLoggedIn = {isLoggedIn}>
          <Deshboard/>
          </PrivateRoute>
          } />



    </Routes>
  </div>

  )
}
 
export default App;
 