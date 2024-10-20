const express = require("express");
const cors = require("cors"); // Add this line to import the cors package
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// CORS middleware
app.use(
  cors({
    origin: "http://10.0.2.2", // Allow your frontend origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
