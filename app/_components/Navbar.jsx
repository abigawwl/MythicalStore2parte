"use client"
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import {UserButton,useUser} from '@clerk/nextjs';
import {ShoppingCart} from "lucide-react";
import { CartContext } from '../_contex/CartContext';
import GlobalApi from '../_utils/GlobalApi';
import Cart from './Cart';

function Navbar() {

  const {user} = useUser();
  const [isLogin,setIsLogin]=useState();
  const [openCart,setOpenCart]=useState(false);
  const {cart, setCart}=useContext(CartContext);
  
  

  useEffect(()=>{
    setIsLogin(window.location.href.toString().includes('sign-in'));
  
  },[])
  //Añadi abigail
  useEffect(()=>{
    user&&getCartItem();
  },[user])

  //esto se puede eliminar si los botones ShoppingCart
  //y UserButton no funcionan o no lo lee el code
  // useEffect(()=>{
  //   user&&getCartItem();
  // },[user])

  // //esto igual
  // useEffect(()=>{
  //   openCart==false&&setOpenCart(true);
  // },[cart])

  //esto no
  const getCartItem=()=>{
    GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress)
    .then(resp=>{
       //elimine un .data
      const result=resp.data.data
     
      result&&result.forEach(prd => {
        setCart(cart=>[...cart,
          {
            id:prd.id,
            product:prd.attributes.products.data[0]
          }
        ])
      });
    })
  }


  return !isLogin&&(
    <>
    <div class="bg-zinc-950 w-full items-center">

        <a href=""><img src="/mythicalLogo.png" alt="" width={100} height={50} class="mx-auto"/></a>

      </div>
    <div class="flex flex-wrap">
      
      <section class="relative mx-auto">
        <nav class="flex justify-between bg-zinc-900 text-white w-screen">
        
          <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">

              <li><Link class="hover:text-gray-200" href="/">Inicio</Link></li>
              <li><Link class="hover:text-gray-200" href="#">Catalogo</Link></li>
              <li><Link class="hover:text-gray-200" href="/pages/nosotros">Nosotros</Link></li>
              <li><Link class="hover:text-gray-200" href="/pages/Contacto">Contacto</Link></li>
              <li><Link class="hover:text-gray-200" href="#">Noticias</Link></li>


            </ul>
            

            
            
            {!user? <div className="sm:flex sm:gap-4">
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
            :
            <div className='flex items-center gap-5'>
              <h2 className='flex gap-1 cursor-pointer'
              onClick={()=>setOpenCart(!openCart)}>
                <ShoppingCart/>({cart?.length})</h2>
              <UserButton/>
            </div> }
            
            {openCart&&<Cart closeCart={()=>setOpenCart(false)}/>}
            

            <div class="hidden xl:flex space-x-5 items-center">
              <a class="hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
              <a class="flex items-center hover:text-gray-200" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                <span class="flex absolute -mt-5 ml-4">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                  </span>
              </a>

              <a class="flex items-center hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </a>
            
            </div>
            <a class="xl:hidden flex mr-6 items-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>
          </div>
        </nav>
      </section>
    </div>
    </>
  )
}

export default Navbar