"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

function ProductSection() {

    const [productList, setProductList]=useState([]);
    
    useEffect(()=>{
        getLatestProducts();
    },[])

    const getLatestProducts=()=>{
        GlobalApi.getLatestProducts().then(resp=>{
            console.log(resp.data);
            setProductList(resp.data.data);
        })
    }

    return productList&&(
        <>
        <div className='px-10 md:px-20 flex text-center justify-center w-full h-full flex-col bg-zinc-800'>
            <h2 className='my-16 text-white font-bold text-7xl'>NEW ARRIVALS</h2>
            
            
        </div>
        <div className='px-20 py-24 bg-black'><ProductList productList={productList}/></div>
        </>
        
    )
}

export default ProductSection