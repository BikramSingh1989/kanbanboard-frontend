import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const loginUser = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { username, password });
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const getTasks = async () => {
  const token = localStorage.getItem("token");
  return axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
