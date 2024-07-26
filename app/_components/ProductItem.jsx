import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProductItem({product}) {
  return (
    <Link href={'product-detail/'+product.id}>
        <div className='hover:border rounded-lg flex flex-col items-center'>
            <Image src={product?.attributes?.banner?.data.attributes?.url}
            alt='banner'
            width={400}
            height={550}
            className='rounded-t-lgh-[190px] object-cover'
            />
            <div className='bg-gray-50 w-full'>
              <div className=' bg-gray-50 p-3 rounded-b-lg '>
                  <h2 className='text-[14] font-medium line-clamp-2 '>{product?.attributes?.title}</h2>
                  <h2>${product.attributes?.pricing}</h2>
              </div>
              
            </div>
        </div>
    </Link>
  )
}

export default ProductItem