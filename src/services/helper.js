import axios from "axios";

export const BASE_URL = "items-backend-production.up.railway.app";
//It is base dns we will use to fetch data from api

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
//using axios we will fetch from backend
