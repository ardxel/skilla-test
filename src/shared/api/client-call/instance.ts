import axios from "axios";
import {API_URL} from "../../config";

export const appInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Authorization": "Bearer testtoken",
    "Content-Type": "application/json"
  }
})