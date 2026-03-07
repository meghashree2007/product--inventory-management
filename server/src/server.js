const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/db");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on PORT", process.env.PORT);
});