// src/components/FilterComponent.js
import React, { useState, useEffect } from 'react';
import GlobalApi from '../_utils/GlobalApi';

const FilterComponent = ({ setFilteredProducts }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch all products to extract unique categories
    const fetchProducts = async () => {
      try {
        const response = await GlobalApi.getLatestProducts();
        console.log("res", response)
        const products = response.data.data;
        console.log("products", products.map(product => product))
        // Extract unique categories
        const uniqueCategories = [
          ...new Set(products.map(product => product.attributes.category)),
        ];

        console.log("uniqueCategories", uniqueCategories)

        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = async () => {
    try {
      console.log("selectedCategory", selectedCategory)
      const response = await GlobalApi.getProductByCategory(selectedCategory);
      console.log("filtro response", response)
      setFilteredProducts(response.data.data);
    } catch (error) {
      console.error('Error applying filter:', error);
    }
  };

  return (
    <div>
      <select onChange={(e) => setSelectedCategory(e.target.value)} className='text-black'>
        <option value="" className='text-black'>Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category} className='text-black'>
            {category}
          </option>
        ))}
      </select>

      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default FilterComponent;
