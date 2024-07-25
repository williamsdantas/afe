import { Container, Col, Row } from "react-bootstrap";
import "./home.css";
import Footer from "../../components/footer/footer"

export const Home = () => {
  return (
    <>
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={6} className="central-column p-3">
            <section>
              <h1>Rick and Morty</h1>
              <p >Criada em 2013 por Justin Roiland e Dan Harmon, segue as aventuras de Rick, um cientista brilhante, e seu neto Morty. A série mistura humor sombrio com questões profundas, 
              apresentando uma crítica social que vai além das piadas típicas de desenhos animados. 
              Embora inclua humor irreverente e pesado, oferece uma visão mais complexa e madura, provocando 
              risadas e reflexões simultaneamente.
              </p>
              <p>Aqui você pode explorar todos os episódios e personagens da série, além de verificar a localização de cada um deles, com informações diretamente extraídas da API oficial de Rick and Morty.</p>
            </section>
          </Col>
        </Row>
        
      </Container>
      <div></div>
    </>
      
  );
};

export default Home;
