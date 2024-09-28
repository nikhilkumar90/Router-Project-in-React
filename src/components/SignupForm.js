import React, { useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,  setFormData] = useState({
        firstname : "", lastname : "",
        password : "", confirmpassword : "",
        email : ""
    })

    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState("student");


    function changeHandler(event){
        setFormData((prevData) => (
            {
            ...prevData,
            [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if (formData.password != formData.confirmpassword){
            toast.error("Password do not match");
            return ;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }
        console.log("printing account data",finalData);
        navigate("/deshboard");


    }



  return (
    <div>
        {/*  student-Instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6  rounded-full max-w-max'>
            <button
            onClick={() => setAccountType("student")}
           className={`${accountType === "student"
            ?
            "bg-richblack-900 text-richblack-5" :
            "bg-transparent text-richblack-200"
           } py-2 px-5 rounded-full transition-all duration-200`}
           >
                Student
            </button>
            <button
            onClick={() => setAccountType("instructor")}
            className={`${accountType === "instructor"
                ?
                "bg-richblack-900 text-richblack-5" :
                "bg-transparent text-richblack-200"
               } py-2 px-5 rounded-full transition-all duration-200`}
            >
                Instructor
            </button>
        </div>


    <form  onSubmit={submitHandler}>
        {/* Firstname and lastname */}
        <div className='flex gap-x-4 mt-4'>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    First Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='firstname'
                value={formData.firstname}
                onChange={changeHandler}
                placeholder='Enter First Name'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Last Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='lastname'
                value={formData.lastname}
                onChange={changeHandler}
                placeholder='Enter Last Name'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
        </div>

       {/* Email Address */}
        <div className='mt-4'>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='email'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email Address'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
        </div>

        {/* createpassword and confirmpassword */}
        <div className='flex gap-x-4 mt-4'>
            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Create Password<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type={showPassword ? ("text") : ("password")}
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span 
                className='absolute right-3 top-[38px] cursor-pointer '
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>


            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Confirm Password<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type={showConfirmPassword ? ("text") : ("password")}
                name='confirmpassword'
                value={formData.confirmpassword}
                onChange={changeHandler}
                placeholder='Confirm Password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span 
                className='absolute right-3 top-[38px] cursor-pointer '
                onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
        </div>

        <button
        className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8'
        >
            Create Account
        </button>



    </form>




    </div>
  )
}

export default SignupForm