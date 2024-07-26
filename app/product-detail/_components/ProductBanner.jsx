import React, { useState } from 'react';
import Image from 'next/image';

function ProductBanner({ product }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {product ? (
        <div className="relative">
          {isLoading && (
            <div className="h-[350px] w-[350px] bg-slate-200 animate-pulse rounded-lg"></div>
          )}
          <Image
            src={product?.attributes?.banner?.data?.attributes.url}
            alt="banner"
            width={350}
            height={400}
            className={`rounded-lg object-cover text-center sm:float-right transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={handleImageLoad}
          />
        </div>
      ) : (
        <SkeltonProjectInfo />
      )}
    </div>
  );
}

export default ProductBanner;
