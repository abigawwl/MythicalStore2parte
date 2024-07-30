'use client';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../_contex/CartContext';
import GlobalApi from '../_utils/GlobalApi';
import Cart from './Cart';

function Navbar() {
  const { user } = useUser();
  const [isLogin, setIsLogin] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setIsLogin(window.location.href.toString().includes('sign-in'));
  }, []);

  useEffect(() => {
    if (user) {
      getCartItem();
    }
  }, [user]);

  const getCartItem = async () => {
    try {
      const resp = await GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress);
      const result = resp.data.data;

      if (result) {
        setCart(result.map(prd => ({
          id: prd.id,
          product: prd.attributes.products.data[0],
          quantity: prd.attributes.quantity || 1,
        })));
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  return !isLogin && (
    <>
      <div className="bg-zinc-950 w-full items-center">
        <a href=""><img src="/mythicalLogo.png" alt="" width={100} height={50} className="mx-auto" /></a>
      </div>
      <div className="flex flex-wrap">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-zinc-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><Link className="hover:text-gray-200" href="/">Inicio</Link></li>
                <li><Link className="hover:text-gray-200" href="/pages/catalog">Catálogo</Link></li>
                <li><Link className="hover:text-gray-200" href="/pages/nosotros">Nosotros</Link></li>
                <li><Link className="hover:text-gray-200" href="/pages/Contacto">Contacto</Link></li>
                <li><Link className="hover:text-gray-200" href="#">Noticias</Link></li>
              </ul>

              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    href="sign-in"
                  >
                    Login
                  </a>
                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                    href="sign-up"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className='flex items-center gap-5'>
                  <h2 className='flex gap-1 cursor-pointer' onClick={() => setOpenCart(!openCart)}>
                    <ShoppingCart />({cart?.length})
                  </h2>
                  <UserButton />
                </div>
              )}
              {openCart && <Cart closeCart={() => setOpenCart(false)} />}
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Navbar;