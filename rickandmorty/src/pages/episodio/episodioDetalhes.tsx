import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Image } from "react-bootstrap";
import { EpisodioType, PersonagemType } from "../../types";
import { getEpisodioPorId } from "../../services/api/episodioAPI/episodioAPI";
import { getPersonagemPorId } from "../../services/api/personagemAPI/personagemAPI";
import "./episodioDetalhes.css";
import Loading from "../../components/loading/loading";

const EpisodioDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [episodio, setEpisodio] = useState<EpisodioType | null>(null);
  const [personagens, setPersonagens] = useState<PersonagemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (id: string) => {
    setLoading(true);

    try {
      const episodioData = await getEpisodioPorId(id);
      setEpisodio(episodioData);

      const personagemIds = episodioData.characters
        .map((url) => url.split("/").pop()!)
        .join(",");

      const personagensData = await getPersonagemPorId(personagemIds);
      setPersonagens(
        Array.isArray(personagensData) ? personagensData : [personagensData]
      );
    } catch (error) {
      console.error("Falha ao recuperar os detalhes do episódio:", error);
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

  if (!episodio) {
    return <p>Episódio não encontrado</p>;
  }

  return (
    <div className="episodio-detalhes1">
      <div>
        <header>
          <h1>Episódio: {episodio.name}</h1>
        </header>

        <p><strong>#</strong> {episodio.episode}</p>
        <p><strong>Data de Estreia:</strong> {episodio.air_date}</p>
        
      </div>
      <div>
        <h2>Personagens</h2>
        <div className="personagens-container1">
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
        </div>
      </div>
     
        <div className="navegacao">
            <Button variant="primary" onClick={() => navigate(-1)}>
            Voltar
            </Button>
        </div>
        
    </div>
  );
};

export default EpisodioDetalhes;
