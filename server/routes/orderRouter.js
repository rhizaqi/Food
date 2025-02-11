const express = require("express");
const orderController = require("../controllers/OrderController");
const authorization = require("../middleware/authorization");
const router = express.Router();

router.get("/", orderController.getOrder); // check all customers orders, should be only admin
router.post("/", orderController.makeOrder);
router.get("/:userId", orderController.allMyOrder);
router.get("/:orderId", orderController.userOneOrder);
router.put("/:orderId", orderController.updateOrder);
router.delete("/:orderId", orderController.deleteOrder);

module.exports = router;
