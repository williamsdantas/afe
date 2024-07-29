/**
 * GET https://rickandmortyapi.com/api/episode
 */
import {RickandMortyAPI} from "../rickandmortyAPI";
import {EpisodioResponse, EpisodioType} from "../../../types/EpisodioType"


export const getTodosEpisodios = async (pagina: number): Promise<EpisodioResponse> =>{
    try {
      const response = await RickandMortyAPI.get(`/episode?page=${pagina}`);
      
      return response.data;

    } catch (error) {
      console.error('Não foi possível recuperar os episodios:', error);
      throw error;
    }
  };

  export const getEpisodioPorId = async (id:string): Promise<EpisodioType[]> =>{
    try {
      const response = await RickandMortyAPI.get(`/episode/${id}`);
      
      return response.data;

    } catch (error) {
      console.error('Não foi possível recuperar os episodios:', error);
      throw error;
    }
  };

