/**
 * GET https://rickandmortyapi.com/api/episode
 */
import {RickandMortyAPI} from "../rickandmortyAPI";
import {EpisodioType} from "../../../types/EpisodioType"


export const getTodosEpisodios = async (): Promise<EpisodioType[]> =>{
    try {
      const response = await RickandMortyAPI.get('/episode');
      
      return response.data;

    } catch (error) {
      console.error('Não foi possível recuperar os episodios:', error);
      throw error;
    }
  };
