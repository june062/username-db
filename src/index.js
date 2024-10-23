const express = require("express");
const userRouter = require("./controllers/userRouter");
const app = express();

app.use("/", userRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Express server is active at port ${PORT}!`)
);
