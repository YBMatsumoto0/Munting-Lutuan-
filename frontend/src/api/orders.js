// src/api/orderApi.js
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getOrders = async (token) => {
  const res = await axios.get(`${API_BASE_URL}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.orders;
};

export const updateOrderStatus = async (orderId, status, token) => {
  const res = await axios.put(`${API_BASE_URL}/orders/${orderId}`, { status }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const deleteOrder = async (orderId, token) => {
  const res = await axios.delete(`${API_BASE_URL}/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createOrder = async (orderData) => {
  const res = await axios.post(`${API_BASE_URL}/orders`, orderData);
  return res.data;
};
