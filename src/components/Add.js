import axios from 'axios';
import React,{Fragment, useEffect, useState}from 'react'
import {Form,Button,FloatingLabel,Container} from "react-bootstrap"
import { toast } from 'react-toastify';
import base_url from '../api/boot-api';
const Add = () =>
{
    useEffect(()=>{
       document.title="Add";
       console.log("Add is runing....")
    },[])
    // const [courseId,setCourseId]=useState()
    // const [courseName,serCourseName]=useState()
    // const [courseDescription,setCourseDescription]=useState()
      const [course,setCourse] = useState({courseId:'',
                                           courseName:'',
                                           courseDescription:''
                                          })
      
      const courseIdHandler = (e)=>{
         // setCourse({...course,courseId:e.target.value}) not a good practice we use below code instead
         setCourse((prevState)=>{
            //console.log(e.target.value)
           return  {...prevState,courseId:e.target.value}//always returns latest values instead of scheduled value
         });
      }
      const courseNameHandler = (event) =>
      {
       /// console.log(event.target.value)
        setCourse({...course,courseName:event.target.value})
      }

      const courseDescriptionHandler = (e) =>{
        //console.log(e.target.value)
         setCourse({...course,courseDescription:e.target.value})
      }
    //Handler Form
    const handleForm =(e) =>{
        console.log(course);
        postCourse(course);
        e.preventDefault();
    }

    //Clear OnClick Handler
    const clearHandler = ()=>{
        //setCourse({});
        setCourse(()=>{
            //console.log(e.target.value)
           return  {}//always returns latest values instead of scheduled value
         });
        console.log(course)
    }
    //Function to post data to server
     const postCourse =(data)=>{
         
          axios.post(`${base_url}/course`,data).then(
            (Response)=>{
                  console.log(Response)
                  console.log("success")
                  toast.success("Course added successfully..")
                  setCourse({})
            },
            (error)=>{
                   console.log(error)
                   console.log("error")
                   toast.error("Something went wrong...Try after some time")
            }
          )
     }
    return (
        <Fragment>
          <Form onSubmit={handleForm}>
            <Form.Group>
            <Form.Label>course Id</Form.Label>
            <Form.Control type="text" placeholder="Enter here" onChange={courseIdHandler}/>
            <Form.Text className="text-muted">
                   We'll never share your Id with anyone else.
            </Form.Text>
            </Form.Group>
            <Form.Group>
            <Form.Label>course Title</Form.Label>
            <Form.Control type="text" placeholder="Enter here" onChange={courseNameHandler}
            />
            </Form.Group>{''}
            <br></br>
            <FloatingLabel controlId="floatingTextarea2" label="Descrption">
            <Form.Control type="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} onChange={courseDescriptionHandler}/>
            </FloatingLabel>
            <Container>
                <Button type='submit' variant='success'>Add Course</Button>
                <Button type='reset' variant='warning' onClick={clearHandler}>Clear</Button>
            </Container>
          </Form>
          
        </Fragment>
    )
}

export default Add