const express = require("express");
// const { connect } = require("mongoose");
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/user.router");
const categoryRouter = require("./routes/category.router");
const productRouter = require("./routes/product.router");
const articleRouter = require("./routes/article.router");
const addressRouter = require("./routes/address.router");
const commandeRouter = require("./routes/commande.router");
const cartRouter = require("./routes/cart.router");
const cors = require("cors");

var app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/article", articleRouter);
app.use("/address", addressRouter);
app.use("/commande", commandeRouter);
app.use("/cart", cartRouter);

connectDB();

var PORT = process.env.PORT || 5005;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`serveur running at ${PORT}`)
);
