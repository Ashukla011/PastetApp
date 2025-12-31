import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Update for deployed backend

export const createPaste = async (data) => {
  return axios.post(`${BASE_URL}/pastes`, data);
};

export const fetchPaste = async (id) => {
  return axios.get(`${BASE_URL}/pastes/${id}`);
};
