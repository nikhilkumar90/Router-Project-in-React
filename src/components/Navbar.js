import React from 'react'
import logo from "../assets/Logo.svg"
import {NavLink,Link} from "react-router-dom"
import  {toast} from "react-hot-toast";
 
const Navbar = (props) => {

        let isLoggedIn = props.isLoggedIn;
        let setIsLoggedIn = props.setIsLoggedIn;



  return (
    <div className='flex h-14 items-center justify-between px-20 bg-richblack-800  w-full border-b-[1px] border-b-richblack-700 transition-all duration-200'>

    <Link to = "/">
        <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
    </Link>

    <nav>
        <ul className='flex gap-x-6 text-richblack-100'>
            <li>
                <NavLink to = "/" >Home</NavLink>
            </li>
            <li>
                <NavLink to = "/course" >Courses</NavLink>
            </li>
            <li>
                <NavLink to = "/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to = "/testimonialpage">Testimonials</NavLink>
            </li>
            <li>
                <NavLink to= "/contact">Contact Us</NavLink>
            </li>
        </ul>
    </nav>

        {/* Login - Singup - Logout - Dashboard */}

        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to = "/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                     rounded-[8px] border border-richblack-700 '>
                        Log in
                    </button>
                </Link>
            }

            { !isLoggedIn &&
                <Link to = "/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                     rounded-[8px] border border-richblack-700 '>
                        Sign up
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to = "/">
                    <button
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                     rounded-[8px] border border-richblack-700 '
                    onClick={ () => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }} >
                        Log Out
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to = "/deshboard">
                    <button
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                    rounded-[8px] border border-richblack-700 '
                    >
                        Dashboard
                    </button>
                </Link>
            }
        </div>



    </div>
  )
}

export default Navbar