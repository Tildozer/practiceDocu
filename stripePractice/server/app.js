require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path');
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY);

app.use(express.static("static"));
app.use(express.json());
const bodyParser = require('body-parser');


app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:4242/order/success",
    success_url: "http://localhost:4242/not-order",
    mode:"payment",
    line_items: [
        {price_data: {
            currency: 'usd',
            product_data: {name: 'T-shirt'},
            unit_amount: 2000,
            tax_behavior: 'exclusive',
          }, quantity: 2},
      ],
    // other options...,
  });
  console.log(session)
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get('/order/success', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);
  
    res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
  });
  

app.listen(4242, () => console.log("Node server listening on port 4242!"));