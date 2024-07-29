// PersonagemDetalhes.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {  Image, Button, Card } from "react-bootstrap";
import { PersonagemType, EpisodioType, LocationType } from "../../types";
import { getPersonagemPorId } from "../../services/api/personagemAPI/personagemAPI";
import { getEpisodioPorId } from "../../services/api/episodioAPI/episodioAPI";
import './personagemDetalhes.css';
import Loading from "../../components/loading/loading";
import { getLocationPorId } from "../../services/api/locationAPI/locationAPI";

const PersonagemDetalhes: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [personagem, setPersonagem] = useState<PersonagemType | null>(null);
    const [episodios, setEpisodios] = useState<EpisodioType>();
    const [location, setLocation] = useState<LocationType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async (id: string) => {
        setLoading(true);

        try {
            const personagemData = await getPersonagemPorId(id);
            setPersonagem(personagemData);

            //busca a localização por id
            const idloc: string =personagemData.location.url.split("/").pop();
            if(idloc.length>0){
                const locationData = await getLocationPorId(idloc);
                setLocation(locationData);

            }
            

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
                            <p><strong>Origem:</strong> {personagem.origin.name}</p>
                            <p><strong> Última Localização: </strong> {" "}
                            {location ? 
                                (<Link to={`/localizacao/${location.id}`}>{location.name}</Link>
                                ) : ("Desconhecida")}
                            
                            </p>
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
