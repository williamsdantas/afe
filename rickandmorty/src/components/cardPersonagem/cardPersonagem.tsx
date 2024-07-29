import React from 'react';
import { Card } from 'react-bootstrap';
import { PersonagemType } from '../../types';
import { Link } from 'react-router-dom';

interface CardPersonagemProps {
  personagem: PersonagemType;
  descricao: string;
}


const CardPersonagem: React.FC<CardPersonagemProps> = ({ personagem, descricao }) => {
  
  

  return (
    <Link to={`/personagem/${personagem.id}`} >
      <Card className="custom-card-width">
        <Card.Img src={personagem.image} alt={personagem.name} />
        <Card.Body>
          <Card.Title>{personagem.name}</Card.Title>
          <Card.Text>{descricao}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardPersonagem;