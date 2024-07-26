import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { PersonagemType, PersonagemResponse } from "../../types";
import { getTodosPersonagens } from "../../services/api/personagemAPI/personagemAPI";
import './personagem.css';

const Personagem: React.FC = () => {
  const [personagens, setPersonagens] = useState<PersonagemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const limite = 6;

  useEffect(() => {
    setLoading(true);
    getTodosPersonagens(pagina)
      .then((data: PersonagemResponse) => {
        setPersonagens(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Falha ao recuperar os personagens:', error);
        setLoading(false);
      });
  }, [pagina]);

  const handleNextPage = () => {
    setPagina((prevPagina) => prevPagina + 1);
  };

  const handlePreviousPage = () => {
    setPagina((prevPagina) => (prevPagina > 1 ? prevPagina - 1 : 1));
  };

  if (loading) {
    return <p>Carregando dados dos personagens...</p>;
  }

  const personagensPaginados = personagens.slice(0, limite);

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col xs={12} className="central-column p-3">
          <div>
            <h1>Personagens</h1>
            <Row>
              {personagensPaginados.map((personagem) => (
                <Col key={personagem.id} xs={12} md={6} lg={4} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={personagem.image} alt={personagem.name} />
                    <Card.Body>
                      <Card.Title>{personagem.name}</Card.Title>
                      <Card.Text>{personagem.species}</Card.Text>
                      <Card.Text>{personagem.gender}</Card.Text>
                      <Card.Text>{personagem.status}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="pagination-controls">
              <Button onClick={handlePreviousPage} disabled={pagina === 1}>
                Anterior
              </Button>
              <span>Página {pagina}</span>
              <Button onClick={handleNextPage}>
                Próximo
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Personagem;
