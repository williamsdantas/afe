/*https://rickandmortyapi.com/documentation/#character-schema
*/

import {RickandMortyAPI} from "../rickandmortyAPI";
import {PersonagemResponse} from "../../../types/PersonagemType";


export const getTodosPersonagens = (pagina: number): Promise<PersonagemResponse> => {
    return new Promise((resolve, reject) => {
        RickandMortyAPI.get(`/character?pagina=${pagina}`)
            .then(response => {
              resolve(response.data);
            })
            .catch(error => {
              console.error('Erro recuperando os personagens:', error);
              reject(error);
        });
    });
};

  export const getPersonagem= async (id: string): Promise<PersonagemResponse> =>{
    try {
      const response = await RickandMortyAPI.get(`/character/${id}`);
      return response.data;

    } catch (error) {
      console.error('Não foi possível recuperar o personagem:', error);
      throw error;
    }
  };
