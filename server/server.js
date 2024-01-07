require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:4242";

app.post("/create-checkout-session", async (req, res) => {
  const params = {
    submit_type: "pay",
    mode: "payment",
    billing_addres_collection: "auto",
    shipping_options: [{ shipping_rate: "shr_1OW551EaXUwV3XlqGjrUqBYe" }],
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  };

  const session = await stripe.checkout.sessions.create();

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on http://localhost:4242"));
