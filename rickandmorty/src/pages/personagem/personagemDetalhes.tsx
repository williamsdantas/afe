// PersonagemDetalhes.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {  Image, Button, Card } from "react-bootstrap";
import { PersonagemType, EpisodioType } from "../../types";
import { getPersonagemPorId } from "../../services/api/personagemAPI/personagemAPI";
import { getEpisodioPorId } from "../../services/api/episodioAPI/episodioAPI";
import './personagemDetalhes.css';
import Loading from "../../components/loading/loading";

const PersonagemDetalhes: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [personagem, setPersonagem] = useState<PersonagemType | null>(null);
    const [episodios, setEpisodios] = useState<EpisodioType>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async (id: string) => {
        setLoading(true);

        try {
            const personagemData = await getPersonagemPorId(id);
            setPersonagem(personagemData);

            const episodeIds = personagemData.episode.map((url) => url.split("/").pop()!).join(",");
            const episodiosData = await getEpisodioPorId(episodeIds);
            setEpisodios(Array.isArray(episodiosData) ? episodiosData : [episodiosData]);

        } catch (error) {
            console.error('Falha ao recuperar os detalhes do personagem:', error);
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
        return <Loading />
    }

    if (!personagem) {
        return <p>Personagem não encontrado</p>;
    }

    return (
        <div className="central-column">
            <header><h1>{personagem.name}</h1></header>
            <div className="episodio-card-container">
                <Image src={personagem.image} alt={personagem.name} thumbnail />
                <Card >
                    <Card.Body>                      
                        <Card.Text>
                            <p><strong>Status:</strong> {personagem.status}</p>
                            <p><strong>Espécie:</strong> {personagem.species}</p>
                            <p><strong>Gênero:</strong> {personagem.gender}</p>
                            <strong> {personagem.origin.name} - url :</strong> {personagem.origin.url}
                            <p><strong> Última Localização: </strong>{personagem.location.name}</p>
                            <p><strong>url:</strong> {personagem.location.url}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
               
            </div>
            <Card >
                <Card.Body>
                    <Card.Title><strong>Participou dos Episódios</strong></Card.Title>
                    <div className="episodio-card-container">
                        {episodios.map((episodio) => (
                            <Card key={episodio.id} className="episodio-card" onClick={() => navigate(`/episodio/${episodio.id}`)}>
                                <Card.Body>
                                    <Card.Title>{episodio.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Air Date:</strong> {episodio.air_date}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Episode:</strong> {episodio.episode}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            <div className="navegacao">
                <Button variant="primary" onClick={() => navigate(-1) }>
                    Voltar
                </Button>
            </div>
        </div>
    );
};

export default PersonagemDetalhes;
