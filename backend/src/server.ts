import dotenv from "dotenv"
import express from "express";
// for redline to check just do command +. and in win do ctrl+.
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import { dbConnect } from "./configs/database.config";
import cors from "cors";
import orderRouter from "./routers/order.router"
dotenv.config()

dbConnect();




const app = express();
app.use(express.json()); // as we need to enable to json

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/foods", foodRouter); // just the the router path and the foodRouter function sol will import all the router from router

app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const port = 5000;

app.listen(port, () => {
  console.log("on localhost" + port);
});
