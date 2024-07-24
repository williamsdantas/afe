import { Navbar, Container, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./header.css";

export default function Header() {
  return (
    <Row className="_header">
      
        <Navbar expand="lg" >
          <Container className="container-fluid">
            <a href="/#">
            <img src={logo} alt="Rick and Morty logo" height="80px" />
            </a>
            
            <Navbar.Brand href="#home" className="navbar-brand">      
              Rick and Morty
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/sobre">A Série</Nav.Link>
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
