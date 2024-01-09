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

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
