const express = require("express");
const router = express.Router();
const userRouter = require('./userRouter');
const foodRouter = require('./foodRouter')

router.use("/user", userRouter);
router.use("/foods", foodRouter)

// router.use("/user");
module.exports = router;
