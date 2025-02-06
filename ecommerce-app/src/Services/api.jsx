import axios from "axios";

const API_URL = "http://localhost:5000/"

export const getCustomers = async () => {
  const response = await axios.get(`${API_URL}/customers`);
  return response.data;
};

export const getCustomerById = async (id) => {
  const response = await axios.get(`${API_URL}/customers/${id}`);
  return response.data;
};

export const createCustomer = async (customer) => {
  const response = await axios.post(`${API_URL}/customers`, customer);
  return response.data;
};

export const updateCustomer = async (id, customer) => {
  const response = await axios.put(`${API_URL}/customers/${id}`, customer);
  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await axios.delete(`${API_URL}/customers/${id}`);
  return response.data;
};

// Product-related API calls
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await axios.post(`${API_URL}/products`, product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put(`${API_URL}/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/products/${id}`);
  return response.data;
};