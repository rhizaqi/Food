const express = require("express");
const router = express.Router();
const userRouter = require('./userRouter');

router.use("/user", userRouter);

// router.use("/user");
module.exports = router;
