// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });

// Load the routes
const inventoryRouter = require("./routes/inventory");
const orderRouter = require("./routes/order");

// Use the routes
app.use("/inventory", inventoryRouter);
app.use("/order", orderRouter);

// Start the server
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
