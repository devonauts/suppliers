import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navigation = (props) => (

    <Navbar  bg="dark" expand="lg" style={{marginBottom:"100px"}}>
    <Navbar.Brand href="#home">
    <h3 style={{color: "white"}}> <Image height='40px' width='40px' src={require("../../assets/logo-white/blanco.png")}/> | Directorio Kartyy </h3>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Form inline>
        <FormControl onChange={props.changes} type="search" placeholder="Search" className="mr-sm-2" />
        <Button onClick={props.filtered} variant="outline-light">Search</Button>
        </Form>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text style={{color:"white"}}>
      Signed in as: <a href="#login" style={{color:"white"}}>Jhony Saltos</a>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
    
)

export default Navigation;