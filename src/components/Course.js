import axios from 'axios';
import react, { useEffect } from 'react'

//import Card from 'react-bootstrap/Card';
import { Card,Button,Container} from "react-bootstrap";
import { toast } from 'react-toastify';
import base_url from '../api/boot-api';

  const Course = ({course})=>
  {
    useEffect(()=>{
      document.title="Deleted";
      console.log("...")
   },[])
  const deletCourse = ()=>
    {
         axios.delete(`${base_url}/course`,course).then(
          (Response)=>{
               console.log(Response.data);
               toast.success("Course Deleted....");
          },
          (error)=>{
              console.log(error);
              toast.error('error');
          }
         )
    }
    return <div>
       <Card>
          <Card.Body className='text-center'>
              <Card.Title className='font-weight-bold'>{course.courseId+' '+course.courseName}</Card.Title>
                  <Card.Text>
                      {course.courseDescription}
                  </Card.Text>
                  <Container className='text-center'>
                  <Button variant="primary" >Update</Button>{'  '}
                  <Button variant="danger" onClick={deletCourse(course)}>Delete</Button>
                  </Container>
          </Card.Body>
       </Card>
    </div>
  }

  export default Course;