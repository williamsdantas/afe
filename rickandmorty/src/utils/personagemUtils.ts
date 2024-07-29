import { PersonagemType } from "../types";

//Gera ma descrição ironica dos personagens com base nas suas caractarísticas
export const obterDescricaoIronica = (personagem: PersonagemType): string => {
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