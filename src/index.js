require("dotenv").config({ path: "../config.env" });
const express = require("express");
const path = require("node:path");

const userRouter = require("./routers/userRouter");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

const PORT = 3000;
app.listen(PORT, console.log(`Express server is active at port ${PORT}!`));
