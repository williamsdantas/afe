import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./sobre.css";

const Sobre: React.FC = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center ">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} className="central-column p-3">
          <section>
            <h1>Rick and Morty</h1>
           <br/><br/><br/>
            <p>
              Criada em 2013 por Justin Roiland e Dan Harmon, a série segue as aventuras de Rick, um cientista brilhante, e seu neto Morty. A mistura de humor sombrio com questões profundas oferece uma crítica social que vai além das piadas típicas de desenhos animados. Embora inclua humor irreverente e pesado, provoca tanto risadas quanto reflexões.
            </p>
            <p>
              Explore todos os episódios e personagens da série e verifique a localização de cada um, com informações diretamente extraídas da API oficial de Rick and Morty.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Sobre;
