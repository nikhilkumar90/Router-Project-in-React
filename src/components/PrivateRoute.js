import React from 'react'
import { Navigate } from 'react-router-dom'
import Deshboard from '../pages/Deshboard'

const PrivateRoute = ({isLoggedIn,setIsLoggedIn}) => {
 if(isLoggedIn){
    return <Deshboard setIsLoggedIn = {setIsLoggedIn}/>
 }

 else{
    return <Navigate to = "/login"/>
 }
  
}

export default PrivateRoute