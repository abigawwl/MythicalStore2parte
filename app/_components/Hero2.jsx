import React from 'react'

function Hero() {
  return (

<div className="relative h-screen">
      <img
        src="/mythicalHero.png"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-black bg-opacity-75 h-screen">
        <div className="px-4 py-16 mx-32 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div>
            <div className="w-full max-w-xl py-36 mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h1 class="text-7xl font-bold text-white mb-6">MYTHICAL</h1>
              <h1 class="text-7xl font-bold text-white mb-6">STREETWEAR</h1>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

