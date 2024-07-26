import axios from "axios";

export const RickandMortyAPI = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

