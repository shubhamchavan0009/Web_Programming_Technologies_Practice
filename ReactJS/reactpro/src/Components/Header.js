import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <Navbar expand="lg" bg='primary'>
                <Container>
                    <Navbar.Brand href="#home">Demo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink to='/home' className="text-white text-decoration-none">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/form' className="text-white text-decoration-none">Form Demo</NavLink>
                            </Nav.Link>
                            <NavDropdown title="Employee" className="text-white">
                                <NavDropdown.Item>
                                    <NavLink to='/addemployee' className="text-decoration-none"> Add Employeee</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to='/employeelist' className="text-decoration-none">Employee Lis</NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                <NavLink to='/lifecycle' className="text-white text-decoration-none">LifeCycle</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/usersubmit' className="text-white text-decoration-none">Add User</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/users' className="text-white text-decoration-none">View Users</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
