import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = ()=>
{
    return( 
    <ListGroup>

        {/* <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
        <ListGroupItem tag="a" href="/add-course" action>Add Course</ListGroupItem>
        <ListGroupItem tag="a" href="/view-course" action>View Course</ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
        <ListGroupItem tag="a" href="#!" action>Contact Us</ListGroupItem> */}
         {/* to Avoid refresh use Link  */}
         <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
         <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">Add Course</Link>
         <Link className="list-group-item list-group-item-action" tag="a" to="view-course">View Courses</Link>
         <Link className="list-group-item list-group-item-action" tag="a" to="#!">About</Link>
         <Link className="list-group-item list-group-item-action" tag="a" to="#!">Contact us</Link>
    </ListGroup>
    
    );
}

export default Menu