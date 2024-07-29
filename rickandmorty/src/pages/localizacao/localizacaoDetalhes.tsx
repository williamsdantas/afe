import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LocationType, PersonagemType } from "../../types";
import { getLocationPorId } from "../../services/api/locationAPI/locationAPI";
import { getPersonagemPorId } from "../../services/api/personagemAPI/personagemAPI";
import Loading from "../../components/loading/loading";
import { Button, Card, Container, Image, Row } from "react-bootstrap";

const LocalizacaoDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [location, setLocation] = useState<LocationType | null>(null);
  const [personagens, setPersonagens] = useState<PersonagemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //recuperando dados da API
  const fetchData = async (id: string) => {
    setLoading(true);

    try {
      //busca a localizaçã por id
      const locationData = await getLocationPorId(id);
      setLocation(locationData);

      //extrai os ids dos residentes
      if (locationData.residents.length > 0) {
        const personagemIds = locationData.residents
          .map((url) => url.split("/").pop()!)
          .join(",");

        //busca os residentes por um conjunto de ids, numa unica chamada
        const personagensData = await getPersonagemPorId(personagemIds);
        setPersonagens(
          Array.isArray(personagensData) ? personagensData : [personagensData]
        );
      } else {
        setPersonagens([]);
      }
    } catch (error) {
      console.error("Falha ao recuperar os detalhes da localização:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!location) {
    return <p>Localização não encontrada</p>;
  }

  return (
    <Container fluid className="central-column">
      <header>
        <h1>Localização: {location.name}</h1>
      </header>
      <p>
        <strong>Tipo:</strong> {location.type}
      </p>
      <p>
        <strong>Dimensão:</strong> {location.dimension}
      </p>
      <p>
        <strong>Tipo:</strong> {location.type}
      </p>

      <h2>Residentes</h2>
      {personagens.length > 0 ? (
        <Row className="personagens-container">
          {personagens.map((personagem) => (
            <Card
              key={personagem.id}
              className="personagem-card"
              onClick={() => navigate(`/personagem/${personagem.id}`)}
            >
              <Image src={personagem.image} alt={personagem.name} thumbnail />
              <Card.Body>
                <Card.Title>{personagem.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      ) : (
        <p>Nenhum residente encontrado para esta localização.</p>
      )}
      <div className="navegacao">
        <Button variant="primary" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
    </Container>
  );
};
export default LocalizacaoDetalhes;
