import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>© 2023 Rick and Morty Fan Site. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;