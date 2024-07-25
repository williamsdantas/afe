import React from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./header.css";

export default function Header() {
  return (
    <Row className="_header">
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={logo} alt="Rick and Morty logo" height="80px" style={{ marginRight: '20px' }} />
            Rick and Morty
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/personagens">Personagens</Nav.Link>
              <Nav.Link href="/episodios">Episódios</Nav.Link>
              <Nav.Link href="/localizacao">Localizações</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}
