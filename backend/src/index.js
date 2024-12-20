import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import plantRoutes from "./routes/plant.route.js";
import orderRoutes from "./routes/order.route.js";


const app = express();
dotenv.config();

const PORT = process.env.PORT;


app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/plants", plantRoutes);
app.use("/api/orders", orderRoutes);


app.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});

