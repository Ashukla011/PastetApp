import axios from "axios";

const BASE_URL = "https://paste-w792.onrender.com/api"; //  backend

export const createPaste = async (data) => {
  return axios.post(`${BASE_URL}/pastes`, data);
};

export const fetchPaste = async (id) => {
  return axios.get(`${BASE_URL}/pastes/${id}`);
};
