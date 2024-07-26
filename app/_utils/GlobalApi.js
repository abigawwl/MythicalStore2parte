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

const getProductById=(productId)=>{
  console.log("Product Id",productId)
  const res = axiosClient.get('/products/'+productId+'?populate=*')
  console.log(res)
  return res
}

const getProductByCategory = (category) => {
  const categoryFilter = category ? `filters[category][$eq]=${category}` : '';
  return axiosClient.get(`/products?${categoryFilter}&populate=*`);
}


const addToCart = (data) => axiosClient.post('/carts', data);

const getUserCartItems = (email) => axiosClient.get(`/carts?populate[products][populate][0]=banner&filters[email][$eq]=${email}`);

const deleteCartItem=(productId)=>{
  console.log("Product Id",productId)
  const res = axiosClient.delete('/carts/'+productId)
  console.log(res)
  return res
}
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
