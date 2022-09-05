import axios from "axios";

function getEnvVar(varName, defaultValue) {
    const result = process.env[varName];

    if (result !=undefined) return result;
    return defaultValue;
}

export const BASE_API = axios.create({
    baseURL: getEnvVar('BACKEND_HOST', 'http://localhost:82')
});