/* eslint-disable no-restricted-globals */
import axios from "axios";


let url = "https://library-back-gces-mica.herokuapp.com";
const hostname = location.hostname

if (hostname.includes("localhost")) url = "http://localhost:82";

export const BASE_API = axios.create({
  baseURL: url
})