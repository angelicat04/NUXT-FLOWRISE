import axios from 'axios';
import { useRuntimeConfig } from '#app';

export function useApi() {
  const config = useRuntimeConfig();

  const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
      Authorization: `Bearer ${config.public.apiKey}`, 
      "Content-Type": "application/json",
    },
  });

  async function getData(endpoint: string, params = {}) {
    try{
      const response = await axiosInstance.get(endpoint, { params });
      console.log("Réponse API:", response.data);
      return response.data;

    }catch(error){
      console.error("Erreur API:", error);
      throw error;

    }finally{
      console.log("Fin de la requête API");
    }
  };

  return{getData};

}