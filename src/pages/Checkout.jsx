import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { CartContext } from "../Features/ContextProvider";
import { Link } from "react-router-dom";

// Standard Stripe implementation should use environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder");

export default function Checkout() {
  const { cart } = useContext(CartContext);
  
  const totalPrice = cart?.reduce((total, item) => {
    const price = parseFloat(item.price?.toString().replace(/,/g, '')) || 0;
    const qty = parseInt(item.quantity?.toString()) || 1;
    return total + (price * qty);
  }, 0) || 0;

  // Use deferred intent mode for instant page loading
  const options = {
    mode: 'payment',
    amount: Math.max(1, Math.round(totalPrice * 100)), // Ensure at least 1 cent/paise
    currency: 'inr',
    appearance: { 
      theme: 'stripe',
      variables: {
        colorPrimary: '#198754', // Matches Green theme
      }
    },
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <Link to="/home" className="btn btn-outline-secondary mb-4 shadow-sm">
            <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
          </Link>
          
          {totalPrice > 0 ? (
            <div className="animate__animated animate__fadeIn">
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm amount={totalPrice} />
              </Elements>
            </div>
          ) : (
            <div className="text-center mt-5 p-5 border rounded bg-white shadow-sm">
              <i className="fa-solid fa-cart-shopping fa-3x text-muted mb-3"></i>
              <h3 className="text-muted">Your cart is empty</h3>
              <Link to="/home" className="btn btn-success mt-3 px-4">Continue Shopping</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
