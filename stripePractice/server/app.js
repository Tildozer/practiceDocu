require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path');
const endpointSecret = process.env.STRIPE_SECRET_END
console.log(endpointSecret)
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY);

app.use(express.static("static"));
app.use(express.json());
const bodyParser = require('body-parser');


app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

const calculateOrderAmount = (items) => {  
  let total = 0;
  if(!items.length){
    return total
  }
  items.forEach(item => {
    total += item.price;
  });
  total = (total * 1.06).toFixed(0)
  return total;
};

app.get("/total", async (req, res) => {
  const total = calculateOrderAmount(req.body.items)

  res.send({total})
})

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
//   const session = await stripe.checkout.sessions.create({
//     success_url: "http://localhost:4242/order/success",
//     success_url: "http://localhost:4242/#/checkout/success",
//     mode:"payment",
//     line_items: [
//         {price_data: {
//             currency: 'usd',
//             product_data: {name: 'T-shirt'},
//             unit_amount: 2000,
//             tax_behavior: 'exclusive',
//           }, quantity: 2},
//       ],
//     // other options...,
//   });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    let event = request.body;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature'];
      console.log(signature)
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  });
  

app.listen(4242, () => console.log("Node server listening on port 4242!"));