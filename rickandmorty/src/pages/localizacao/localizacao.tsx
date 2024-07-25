import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Localizacao: React.FC = () => {
  return (
    <div>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
      >
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={6} className="central-column p-3">
            <div>
              <h1>Localizações</h1>
              <p>Detalhes sobre as localizações serão exibidos aqui.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Localizacao;