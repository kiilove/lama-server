const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");

dotenv.config();

app.get("/api/test", () => {
  console.log("test is successfull");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBConnection Success");
  })
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);

app.listen(process.env.PORT, () => {
  console.log(`Backend Server is running for PORT:${process.env.PORT}!`);
});
