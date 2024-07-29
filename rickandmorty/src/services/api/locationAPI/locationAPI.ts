/**?
 * Location schema
Key	      | Type	 |Description
id	      | int	     |  The id of the location.
name      | string	 |   The name of the location.
type      | string	 |   The type of the location.
dimension | string	 |   The dimension in which the location is located.
residents | array    |   (urls)	List of character who have been last seen in the location.
url	      | string   |   (url)	Link to the location's own endpoint.
created	  | string	 |   Time at which the location was created in the database.
 */


import { LocationResponse, LocationType } from "../../../types/LocationType";
import { RickandMortyAPI } from "../rickandmortyAPI";

export const getTodasLocation = async (pagina: number): Promise<LocationResponse> => {
  try {
    const response = await RickandMortyAPI.get(`/location?page=${pagina}`);

    return response.data;

  } catch (error) {
    console.error('Não foi possível recuperar as localizações:', error);
    throw error;
  }
}

export const getLocationPorId = (id: string): Promise<LocationType> => {
  return new Promise((resolve, reject) => {
    
      RickandMortyAPI.get(`/location/${id}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.error('Erro recuperando os detalhes da localização:', error);
          reject(error);
        });
    });
}
