// PersonagemDetalhes.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {  Image, Button, Card, CardImg, Row, Col } from "react-bootstrap";
import { PersonagemType, EpisodioType, LocationType } from "../../types";
import { getPersonagemPorId } from "../../services/api/personagemAPI/personagemAPI";
import { getEpisodioPorId } from "../../services/api/episodioAPI/episodioAPI";
import './personagemDetalhes.css';
import Loading from "../../components/loading/loading";
import { getLocationPorId } from "../../services/api/locationAPI/locationAPI";
import { obterDescricaoIronica } from "../../utils/personagemUtils";

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
        <div className="central-column1">
            <header><h1>{personagem.name}</h1></header>
            <div >                
                <Card className="personagem-detalhes mb-4">
                    <Row noGutters className="d-flex ">
                        <Col md={4}>
                            <Card.Img variant="top" src={personagem.image} alt={personagem.name}  />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Text><strong>Status:</strong> {personagem.status}</Card.Text> 
                                <Card.Text><strong>Espécie:</strong> {personagem.species}   </Card.Text>
                                <Card.Text><strong>Gênero:</strong> {personagem.gender}   </Card.Text>
                                <Card.Text><strong>Origem:</strong> {personagem.origin.name}  </Card.Text>
                                <Card.Text><strong> Última Localização: </strong> {location ? (<Link to={`/localizacao/${location.id}`}>{location.name}</Link>) : ("Desconhecida")}</Card.Text>                                             
                                <Card.Text><strong>Resumé:</strong> {obterDescricaoIronica(personagem)}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Card.Body>  
                               
                        
                    </Card.Body>
                </Card>               
            </div>
            <Card >
                <Card.Body>
                    <Card.Title><strong>Participou dos Episódios</strong></Card.Title>
                    <div className="episodio-card-container1">
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
