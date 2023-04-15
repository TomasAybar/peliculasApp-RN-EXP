import axios from "axios";
import { API_KEY, API_URI } from "../config/config";

const movieDB = axios.create({
  baseURL: API_URI,
  params: {
    api_key: API_KEY,
    language: "es-ES",
  },
});

export default movieDB;
