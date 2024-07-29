/*https://rickandmortyapi.com/documentation/#character-schema
*/

import { RickandMortyAPI } from "../rickandmortyAPI";
import { PersonagemResponse, PersonagemType } from "../../../types/PersonagemType";


export const getTodosPersonagens = (pagina: number): Promise<PersonagemResponse> => {
  return new Promise((resolve, reject) => {

    RickandMortyAPI.get(`/character?page=${pagina}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.error('Erro recuperando os personagens:', error);
        reject(error);
      });
  });
};

export const getPersonagemPorId = (id: string): Promise<PersonagemType> => {
  return new Promise((resolve, reject) => {
    
      RickandMortyAPI.get(`/character/${id}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.error('Erro recuperando os detalhes do personagem:', error);
          reject(error);
        });
    });
}

