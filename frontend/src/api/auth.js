import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function loginUser(credentials) {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("logged user", response.data);

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
}
