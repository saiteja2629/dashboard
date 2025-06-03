import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../../src/logo.svg'; // Replace with your logo path

const Header = () => (
    <Navbar   fixed="top" className="shadow-sm" style={{backgroundColor: "#fff"}}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <span>Mos-constraint management</span>
      </Navbar.Brand>
      <Navbar.Text className="ms-auto">Shiva Balakrishna</Navbar.Text>
    </Container>
  </Navbar>
);

export default Header;
