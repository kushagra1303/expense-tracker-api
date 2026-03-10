import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req,res)=> {
    res.send("Expense tracker api running")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`)
});

