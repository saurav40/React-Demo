import React,{useState,useEffect} from 'react'
import Course from './Course'
import base_url from '../api/boot-api'
import axios from 'axios'
import { toast } from 'react-toastify'

const Allcourse=()=>
{

    useEffect(()=>{
        document.title="All Courses"
        getAllCourse();
    },[])

    //fuction to boot
    const getAllCourse=()=>{
        axios.get(`${base_url}/courses`).then(
           (Response)=>{
              console.log(Response.data)
              toast.success("Courses has been loaded")
              setCourses(Response.data)
           },
           (error)=>{
            console.log(error)
            toast.error("error")
           }
        )
    }

    //calling getAllcourse





    //Arrray Declration -->course is var_name,setCourse for seting & use state for createing and assiging
     const [courses,setCourses]=useState([])
    return( 
    <div className='text-center'>
        <h1> All Courses</h1>
        <p>List of Courses are as follows:</p>
         {
            courses.length>0?courses.map((value)=><Course course={value}/>):"No Courses available"
         }
    </div>
    )
}

export default Allcourse