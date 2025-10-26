import express from "express";
import mongoose from "mongoose";
import { corsMiddleware } from "./config/cors.js";
import productRoutes from "./routes/productRoute.js";

const app = express();

app.use(express.json());
app.use(corsMiddleware);

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("✅ Product Manager API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
