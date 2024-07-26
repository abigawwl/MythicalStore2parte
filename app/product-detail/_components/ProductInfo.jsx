import GlobalApi from '../../_utils/GlobalApi';
import React, { useContext, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { CartContext } from '../../_contex/CartContext';
import { ShoppingCart } from 'lucide-react';

function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);

  const onAddToCartClick = async () => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    if (isAdding) return;

    setIsAdding(true);

    try {
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };

      const resp = await GlobalApi.addToCart(data);
      console.log('Add to Cart', resp);

      if (resp) {
        setCart((cart) => {
          const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
          
          if (existingProductIndex !== -1) {
            return cart.map((item, index) =>
              index === existingProductIndex
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
            );
          } else {
            return [
              ...cart,
              {
                id: resp?.data?.id,
                product: product,
                quantity: 1
              },
            ];
          }
        });
      }
    } catch (error) {
      console.log('Error', error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-[20px]">{product?.attributes?.title}</h2>
          <h2 className="text-[15px] text-gray-400">{product?.attributes?.category}</h2>
          <h2 className="text-[15px] mt-5 text-gray-700">{product?.attributes?.description}</h2>
          <h2 className="text-[32px] text-primary font-medium mt-5">$ {product?.attributes?.pricing}</h2>
          <button
            className='flex gap-2 p-3 px-10 mt-5 bg-black hover:bg-gray-800 text-white rounded-lg'
            onClick={onAddToCartClick}
            disabled={isAdding}
          >
            <ShoppingCart />
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      ) : (
        <SkeltonProjectInfo />
      )}
    </div>
  );
}

export default ProductInfo;
