import React, { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { createPaymentIntentAPI } from "../Services/allAPI";

export default function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    try {
      // 1. Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setMessage(submitError.message);
        toast.error(submitError.message);
        setIsLoading(false);
        return;
      }

      // 2. Create PaymentIntent on the server
      const amountInCents = Math.round(amount * 100);
      const res = await createPaymentIntentAPI({ amount: amountInCents });
      
      const status = res.status || res.response?.status;
      const data = res.data || res.response?.data;

      if (status !== 200 || !data?.clientSecret) {
        throw new Error(data?.message || "Failed to create payment session. Please check your Stripe keys.");
      }

      // 3. Confirm the payment
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: data.clientSecret,
        confirmParams: {
          return_url: window.location.origin + "/home",
        },
      });

      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
          toast.error(error.message);
        } else {
          setMessage("An unexpected error occurred.");
          toast.error("An unexpected error occurred.");
        }
      }
    } catch (err) {
      console.error("Checkout Error:", err);
      setMessage(err.message);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const paymentElementOptions = { layout: "tabs" };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
      <h3 className="mb-4 text-center fw-bold text-success">Secure Checkout</h3>
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded border">
        <span className="fw-semibold">Total Amount: </span> 
        <span className="text-success fs-4 fw-bold">Rs: {amount}</span>
      </div>
      
      <div className="mb-4">
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      </div>

      <button disabled={isLoading || !stripe || !elements} id="submit" className="btn btn-success w-100 py-3 fw-bold shadow-sm transition-all hover-transform">
        <span id="button-text">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center">
              <div className="spinner-border spinner-border-sm me-2" role="status"></div>
              <span>Processing...</span>
            </div>
          ) : (
            <>
              <i className="fa-solid fa-lock me-2"></i> Pay Now
            </>
          )}
        </span>
      </button>
      
      {message && (
        <div id="payment-message" className="mt-4 p-2 rounded text-center small bg-danger-subtle text-danger border border-danger-subtle">
          {message}
        </div>
      )}
      
      <div className="mt-4 text-center text-muted small">
        <i className="fa-solid fa-shield-halved me-1"></i> Your payment is secured with Stripe encryption
      </div>
    </form>
  );
}
