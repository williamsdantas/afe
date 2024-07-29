import React from 'react';
import { Card } from 'react-bootstrap';
import { PersonagemType } from '../../types';
import { Link } from 'react-router-dom';

interface CardPersonagemProps {
  personagem: PersonagemType;
}


const CardPersonagem: React.FC<CardPersonagemProps> = ({ personagem }) => {
  const obterDescricaoIronica = (personagem: PersonagemType): string => {
    const { status, species, gender, location } = personagem;
  
    const statusTexto = status === 'Alive' 
      ? (gender === 'Female' ? 'está inacreditavelmente viva e bem' : 'está inacreditavelmente vivo e bem')
      : status === 'Dead'
        ? 'não conseguiu escapar da morte, que surpresa! Alívio, afinal.'
        : 'está em um estado de incerteza existencial';
  
    const generoTexto = gender === 'Female'
      ? 'uma'
      : gender === 'Male'
        ? 'um'
        : 'um ser';
  
    const especieTexto = species === 'Human'
      ? (gender === 'Female' ? 'simples humana' : 'simples humano')
      : `impressionante ${species.toLowerCase()}`;
  
    const localizacaoTexto = location.name === 'unknown'
      ? 'um lugar misterioso que ninguém se importa'
      : location.name;
  
    return `${generoTexto} ${especieTexto} que ${statusTexto}. Sua última localização conhecida foi ${localizacaoTexto}. Fascinante, não é?`;
  };
  

  return (
    <Link to={`/personagem/${personagem.id}`} >
      <Card className="custom-card-width">
        <Card.Img variant="top" src={personagem.image} alt={personagem.name} />
        <Card.Body>
          <Card.Title>{personagem.name}</Card.Title>
          <Card.Text>{obterDescricaoIronica(personagem)}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardPersonagem;