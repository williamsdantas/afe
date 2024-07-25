import React from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./header.css";

const Header: React.FC = () => {
  return (
    <Row className="_header">
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container className="container-fluid">
          <LinkContainer to="/">
            <Navbar.Brand as="div">
              <img src={logo} alt="Rick and Morty logo" height="80px" />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              Rick and Morty
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/personagem">
                <Nav.Link className="nav-link">Personagens</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/episodio">
                <Nav.Link className="nav-link">Episódios</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/localizacao">
                <Nav.Link className="nav-link">Localizações</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
export default Header;
