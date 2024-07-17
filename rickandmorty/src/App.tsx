import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./assets/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="_header" className="divHeader">
        <div id="interna" className="divTitulo">
          <div id="logo" className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div>
            <p className="titulo"> The Rick and Morty APP</p>
            <Navbar expand="lg" className="bg-body-tertiary" >
              <Container >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto menu">
                    <Nav.Link href="#personagens">Personagens</Nav.Link>
                    <Nav.Link href="#episodios">Episódios</Nav.Link>                    
                    <Nav.Link href="#dimensoens">Dimensões</Nav.Link>
                    <Nav.Link href="#sobre">Sobre</Nav.Link> 
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
