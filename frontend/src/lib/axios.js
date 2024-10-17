import axios from "axios";

const backendAPI = import.meta.env.VITE_BIZGUIDE360_API;
const backendAIAPI = import.meta.env.VITE_BIZAI_API;

function createMainInstance(sendJsonData = true, jwtToken = null) {
  const headers = {};

  // Set Content-Type header based on the sendJsonData parameter
  if (sendJsonData) {
    headers["Content-Type"] = "application/json";
  } else {
    headers["Content-Type"] = "multipart/form-data";
  }

  if (jwtToken) {
    headers["Authorization"] = `Bearer ${jwtToken}`;
  }

  return axios.create({
    baseURL: backendAPI,
    timeout: 50000,
    headers: { ...headers },
  });
}

function createAIInstance() {
  return axios.create({
    baseURL: backendAIAPI,
    timeout: 500000000,
    headers: { "Content-Type": "application/json" },
  });
}

export { createMainInstance, createAIInstance };
