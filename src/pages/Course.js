import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "../CourseData";
import Filter from '../Courses/Filter'
import CourseCards from "../Courses/CourseCards";
import Spinner from "../Courses/Spinner";
import { toast } from "react-toastify";


const Course = () => {

const [courses, setCourses] = useState(null);
const [loading,setLoading] = useState(true);
const [category, setCategory] = useState(filterData[0].title);

const fetchData = async() => {
  setLoading(true);
  try{
    const res = await fetch(apiUrl);
    const output = await res.json();
    console.log(output);
    // save data into a variable
    
    setCourses(output.data);
    
   
  }
  catch(error){
    toast.error("Something went wrong");
  }
  setLoading(false);
}

useEffect( () =>{
  fetchData();
},[]);

  return (

    <div className="min-h-screen flex flex-col bg-slate-900">
       <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl text-white font-bold mb-4">Top Courses</h1>
        
      </div>
    </section>
      
      <div className="bg-slate-800">
      <div>
      <Filter 
      filterData = {filterData}
      category ={category}
      setCategory={setCategory}
      />
      </div>
      <div className="w-full  mx-auto flex flex-wrap justify-center items-center min-h-[50px]">
      {
        loading ? (<Spinner/>) : (<CourseCards courses = {courses} category = {category} />)
      }
      </div>
      </div>
    </div>
  );
};

export default Course;  