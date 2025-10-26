import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { corsMiddleware } from "./config/cors.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("✅ Product Manager API is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
