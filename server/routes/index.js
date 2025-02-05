const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const foodRouter = require("./foodRouter");
const orderRouter = require("./orderRouter");
const categoryRouter = require("./categoryRouter");
const authentication = require("../middleware/authentication");

router.use("/user", userRouter);
router.use("/foods", foodRouter);
router.use("/orders", authentication, orderRouter);
router.use("/categories", categoryRouter);

module.exports = router;
