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



export interface LocationType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
