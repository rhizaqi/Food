const express = require('express')
const orderController = require('../controllers/OrderController')
const router = express.Router()

router.get('/', orderController.getOrder)
router.post('/', orderController.makeOrder)
router.get('/:userId', orderController.allMyOrder)
router.get('/:orderId', orderController.userOneOrder)


module.exports = router