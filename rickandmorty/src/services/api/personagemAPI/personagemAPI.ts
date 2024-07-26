/*https://rickandmortyapi.com/documentation/#character-schema
*/

import {RickandMortyAPI} from "../rickandmortyAPI";
import {PersonagemType} from "../../../types/PersonagemType";


export const getPersonagens = async (): Promise<PersonagemType[]> =>{
    try {
      const response = await RickandMortyAPI.get('/character');
      
      return response.data;

    } catch (error) {
      console.error('Não foi possível recuperar os personagens:', error);
      throw error;
    }
  };
