require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripeRoutes = require("./routes/stripe");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/stripe", stripeRoutes);

// Define a new route for the root path
app.get("/", (req, res) => {
  res.send("Welcome to my e-commerce site!");
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/stripe/session/:sessionId", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.params.sessionId
    );
    // Optionally, you can filter what details to send to the frontend for security reasons
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
