import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useContext, useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { CartContext } from '../../_contex/CartContext';


function CheckoutForm({amount}) {
    const stripe = useStripe();
    const elements = useElements();
    const {user}=useUser();
    const [loading, setLoading] = useState(false);
    const {cart,setCart}=useContext(CartContext);
    const [errorMessage, setErrorMessage] = useState('');
    const handleError = (error) => {
        setLoading(false);
        setErrorMessage(error.message);
      }
  
    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js hasn't yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }

        // Trigger form validation and wallet collection
        const {error: submitError} = await elements.submit();
            if (submitError) {
            handleError(submitError);
          return;
        }
        createOrder();
        sendEmail();
        const res=await fetch("/api/create-intent", {
            method:'POST',
            body: JSON.stringify({
                amount: amount
            })
        })
        const clientSecret= await res.json();
        const result = await stripe.confirmPayment({
          //`Elements` instance that was used to create the Payment Element
          clientSecret: clientSecret,
          elements,
          confirmParams: {
            return_url: "http://localhost:3000/payment-confirm",
          },
        });
    
        if (result.error) {
          // Show error to your customer (for example, payment details incomplete)
          console.log(result.error.message);
        } else {
          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.
        }
      };

    const createOrder=()=>{
      let productIds=[];
      cart.forEach(element => {
        productIds.push(element?.product?.id)
    });
      const data={
        data:{
          email: user.primaryEmailAddress.emailAddress,
          userName: user.fullName,
          amount:amount,
          products:productIds
        }
      }
      GlobalApi.createOrder(data).then(resp=>{
        if(resp)
        {
          cart.forEach(element => {
            GlobalApi.deleteCartItem(element.id).then(result=>{
              
            })
        });
        }

      })
    }

    const sendEmail=async()=>{
      const res=await fetch("/api/send-email", {
        method:'POST',
        body: JSON.stringify({
            amount: amount,
            email:user.primaryEmailAddress.emailAddress,
            fullName:user.fullName
        })
    })
    }
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Complete Your Purchase</h2>
              <PaymentElement className="mb-4" />
              {errorMessage && (
                  <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
              )}
              <button
                  type="submit"
                  className={`w-full py-2 px-4 rounded-md text-white ${loading ? 'bg-gray-600' : 'bg-black hover:bg-gray-900'} transition`}
                  disabled={loading}
              >
                  {loading ? 'Processing...' : `Pay $${amount}`}
              </button>
          </form>
      </div>
  );
}


export default CheckoutForm