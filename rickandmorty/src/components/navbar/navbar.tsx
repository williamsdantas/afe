import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="logo">
      <img src={logo} alt="Rick and Morty logo" />
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/personagens">Personagens</Nav.Link>
              <Nav.Link href="/episodios">Episódios</Nav.Link>
              <Nav.Link href="/localizacao">Localizações</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
