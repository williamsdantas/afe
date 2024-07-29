
/**O componente RickandMortyAPI configura uma instância do Axios para fazer requisições à API do 
 * Rick and Morty com uma URL base, um tempo limite de 5 segundos 
 * e um cabeçalho Content-Type de application/json. 
 * Isso facilita e padroniza a interação com a API ao longo do seu código. */

 import axios from "axios";

export const RickandMortyAPI = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

