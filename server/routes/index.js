const express = require("express");
const router = express.Router();
const userRouter = require('./userRouter');
const foodRouter = require('./foodRouter')
const orderRouter = require('./orderRouter')

router.use("/user", userRouter);
router.use("/foods", foodRouter)
router.use("/orders", orderRouter)

module.exports = router;
