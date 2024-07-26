'use client'
import Breadcrumb from '../../_components/Breadcrumb';
import GlobalApi from '../../_utils/GlobalApi';
import React, { useEffect, useState } from 'react';
import ProductBanner from '../_components/ProductBanner';
import ProductInfo from '../_components/ProductInfo';
import ProductList from '../../_components/ProductList';
import Footer from '../../_components/Footer';
import { usePathname } from 'next/navigation';

function ProductDetail(params) {
  const path = usePathname();
  const [productDetail, setProductDetail] = useState({});
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("Product Path", params.params.productId);

    const fetchData = async () => {
      console.log("Fetching product", params.params.productId);
      try {
        const res = await GlobalApi.getProductById(params.params.productId);
        console.log("Product fetched", res);
        setProductDetail(res.data.data);
        getProductListByCategory(res.data.data.attributes.category);
      } catch (err) {
        console.log("Error fetching product", err);
      }
    }

    fetchData();
  }, [params.params.productId]);

  const getProductListByCategory = async (category) => {
    if (!category) {
      console.log("No category provided");
      return;
    }

    try {
      const resp = await GlobalApi.getProductByCategory(category);
      console.log("Related products fetched", resp);
      setProductList(resp.data.data);
    } catch (err) {
      console.log("Error fetching related products", err);
    }
  }

  return (
    <>
      <div className='p-5 py-20 px-10 md:px-28'>
        <Breadcrumb path={path} />
        <div className='flex flex-col sm:flex-row mt-10 gap-5 sm:gap-10'>
          <ProductBanner product={productDetail} />
          <ProductInfo product={productDetail} />
        </div>
        {productList.length > 0 && (
          <div className='mt-20'>
            <h2 className='font-medium text-[20px] mb-4 text-black'>Te podría interesar</h2>
            <ProductList productList={productList} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
