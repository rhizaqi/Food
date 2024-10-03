const express = require("express");
const userController = require("../controllers/UserController");
const router = express.Router();

router.get("/", userController.getUser);
router.post("/login", userController.login)
router.post("/register", userController.register)

module.exports = router;
