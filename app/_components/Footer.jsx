import React from 'react'

function Footer() {
    return (
      <footer class="bg-black">
        <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
            <p class="font-medium text-white dark:text-white">Exclusive</p>
              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Subscribe
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Get 10% off your first order
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    HR Consulting
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-medium text-white dark:text-white">Support</p>
              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    mythicalstore@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    +505 7685 9809
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-medium text-white dark:text-white">Account</p>
              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    My account
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                   Login/Register
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-medium text-white dark:text-white">Quick Link</p>
              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;