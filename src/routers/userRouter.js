const { Router } = require("express");
const userControllers = require("../controllers/userControllers.js");
const userRouter = Router();

userRouter.get("/", [
  userControllers.usernameListGet,
  userControllers.usernameSearch,
]);
userRouter.get("/new", userControllers.usernameFormGet);
userRouter.post("/new", userControllers.createUsernamePost);

module.exports = userRouter;
