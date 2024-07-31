'use client';

import React, { useState, useEffect } from 'react';
import GlobalApi from '../../_utils/GlobalApi'; // Asegúrate de que esta ruta sea correcta
import Navbar from '../../_components/Navbar'; // Ajusta la ruta según tu estructura
import FilterComponent from '../../_components/ComponenteFiltro';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(GlobalApi)
    const fetchProducts = async () => {
      console.log("paso por aqui")
      try {
        console.log("hacieendo la peticion")
        const productResponse = await GlobalApi.getLatestProducts();
        console.log("y por aca")
        console.log(productResponse.data.data)
        setProducts(productResponse.data.data);
        setFilteredProducts(productResponse.data.data);
      } catch (error) {
        console.log("o tlavez por aca")
        console.error('Error fetching products:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const categoryResponse = await GlobalApi.getProductByCategory();
        setCategories(categoryResponse.data);
        console.log(categoryResponse)
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  console.log("productos filtrados:", filteredProducts, filteredProducts.length > 0);

  return (
    <>
      <Navbar />
      <section className="bg-white-950 text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Catálogo de Productos</h2>
          </div>

          <FilterComponent
            categories={categories}
            setFilteredProducts={setFilteredProducts}
            allProducts={products}
          />
          {/* Product Card */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link href={'/product-detail/' + product.id} key={product.id} className="p-4 border border-gray-800 rounded-lg">
                  <Image src={'http://localhost:1337' + product?.attributes?.banner?.data.attributes?.url}
                    alt='banner'
                    width={400}
                    height={550}
                    className='rounded-t-lgh-[190px] object-cover'
                  />
                  <h3 className="text-xl font-bold text-white">{product.attributes.title}</h3>
                  <p className="text-gray-300">{product.attributes.price}</p>
                  <p className="text-gray-400">Categoría: {product.attributes.category}</p>
                  <p className="text-gray-400">Marca: {product.attributes.brand}</p>
                </Link>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>


        </div>
      </section>
    </>
  );
}

export default Page;
