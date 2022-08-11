import React from "react";
import '../App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
const Head = () => {
    return ( 
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/AHome">Home</Navbar.Brand>
          <Navbar.Brand href="/ListView">User List</Navbar.Brand>
          <Navbar.Brand href="/JoinView">Appointment List</Navbar.Brand>
          <Navbar.Brand href="/ItemlistView">Products List</Navbar.Brand>
         
          <Navbar.Brand href="/UnverifiedView">Unverified Users List</Navbar.Brand>
          <Navbar.Brand href="/DocReviewsView">Doctor's Reviews</Navbar.Brand>
          <Navbar.Brand href="/ProfileAdminView">Profile</Navbar.Brand>
          <Navbar.Brand href="/AddUserView">Add User</Navbar.Brand>
          <Navbar.Brand href="/AddAppView">Add Appointment</Navbar.Brand>
          <Navbar.Brand href="/registration">Register</Navbar.Brand>
          <Navbar.Brand href="/login">Login</Navbar.Brand>
          <Navbar.Brand href="/logout">Logout</Navbar.Brand>
          {/* <Navbar.Brand href="/ListView">User List</Navbar.Brand> */}
         
          
        </Container>
      </Navbar>
    )
}

export default Head;