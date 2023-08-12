require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Internal imports
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST"], // Allow specified HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specified headers
  })
);
// app.use(express.static("public"));

app.use("/", urlRoutes);

const PORT = process.env.PORT || 4000;
connectDB().then(
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
);
