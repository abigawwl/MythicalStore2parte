import React, { useContext } from 'react';
import { CartContext } from '../_contex/CartContext';
import { useRouter } from 'next/navigation';

function Cart({ closeCart }) {
    const { cart } = useContext(CartContext);
    const router = useRouter();

    const getTotalAmount = () => {
        let totalAmount = 0;
        cart.forEach(item => {
            totalAmount += Number(item?.product?.attributes?.pricing) || 0;
        });
        return totalAmount;
    };

    return (
        <div className='h-[300px] w-[250px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto'>
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {cart.map(item => (
                        <li className="flex items-center gap-4" key={item.id}>
                            <img
                                src={item?.product?.attributes?.banner?.data?.attributes?.url || '/default-image.jpg'}
                                alt={item.product?.attributes.title || 'Product Image'}
                                className="h-16 w-16 rounded object-cover"
                            />
                            <div>
                                <h3 className="text-sm text-gray-900">{item.product?.attributes.title}</h3>
                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">{item?.product?.attributes?.category}</dt>
                                    </div>
                                    <div>
                                        <dt className="inline">${item.product?.attributes?.pricing || '0.00'}</dt>
                                    </div>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="space-y-4 text-center mt-5">
                    <a
                        href="/cart"
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                        View my cart ({cart.length})
                    </a>
                    <button
                        onClick={() => closeCart()}
                        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                    >
                        Continue shopping
                    </button>
                    <div className="mt-4">
                        <div className="flex justify-between text-sm font-medium">
                            <span>Total:</span>
                            <span>${getTotalAmount()}</span>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;