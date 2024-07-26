const { default: axios } = require('axios');

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = 'http://localhost:1337/api';

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
});

const getLatestProducts = () => axiosClient.get('/products?populate=*');

const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

const getProductByCategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

const addToCart = (data) => axiosClient.post('/carts', data);

const getUserCartItems = (email) => axiosClient.get(`/carts?populate[products][populate][0]=banner&filters[email][$eq]=${email}`);

const deleteCartItem = (productId) => {
  return axiosClient.delete(`/carts/${productId}`);
};

const createOrder = (data) => axiosClient.post('/orders', data);

export default {
  getLatestProducts,
  getProductById,
  getProductByCategory,
  addToCart,
  getUserCartItems,
  deleteCartItem,
  createOrder
};
