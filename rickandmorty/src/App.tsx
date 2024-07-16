import { Navbar, Container, Nav } from "react-bootstrap"
import logo from './assets/logo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div id="_header" className="divHeader">
        <div id="interna" className='divTitulo'>
          <div id="logo" className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div>
            <p className='titulo'>The Rick and Morty APP</p>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">R & M</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link>
                      <Link to='/personagens'>Personagens</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to='/episodios'>Episódios</Link>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>

    </>
  )
}

export default App