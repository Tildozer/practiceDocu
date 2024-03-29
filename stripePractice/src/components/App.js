import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Routes, Route } from "react-router-dom";
import CheckoutComplete from "./CheckoutComplete";
import AddressForm from "./AddressForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MozgnBDEhlkywKjU4MSnl1yZL7AHrm0WTso3hZ7xYWwpwvVQ6SmQetZ1LL6E8rnOwI6zgHphG58XjICDyTHZyNT004inXe5YK");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", price: 1099}] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Routes>
            <Route 
              exact path="/"
              element={<CheckoutForm />}
            />
            <Route path="/address" element={<AddressForm />} /> 
              
            <Route 
              path="/checkout/success/"
              element={<CheckoutComplete />}
            />
          </Routes>
        </Elements>
      )}
    </div>
  );
}