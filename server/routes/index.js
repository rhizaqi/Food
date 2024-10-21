const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const foodRouter = require("./foodRouter");
const orderRouter = require("./orderRouter");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router.use("/user", userRouter);
router.use("/foods", foodRouter);
router.use("/orders", authentication, authorization, orderRouter);

module.exports = router;
