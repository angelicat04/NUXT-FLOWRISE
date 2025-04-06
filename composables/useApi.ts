import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    Authorization: `Bearer ad67003737fe4f82b1b865525e97658a`,
    "Content-Type": "application/json",
  },
});

export async function getData(endpoint: string, params = {}) { 
  try {
    const response = await axiosInstance.get(endpoint, { params });
    console.log("Réponse API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
    throw error;
  }
}
