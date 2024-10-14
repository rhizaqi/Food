const express = require("express");
const userController = require("../controllers/UserController");
const authentication = require("../middleware/authentication");
const router = express.Router();

router.get("/", userController.getUser);
router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
