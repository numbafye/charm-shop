const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

console.log(process.env.STRIPE_SECRET_KEY)

router.post("/create-checkout-session", async (req, res) => {
    try {
      console.log("Received items:", req.body.items);

      const { items } = req.body; // Receive the items from the frontend
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: items, // Use the items in the checkout session
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });
  
      res.json({ id: session.id });
    } catch (error) {
      res.status(400).send({ error: { message: error.message } });
    }
  });
  

module.exports = router;
