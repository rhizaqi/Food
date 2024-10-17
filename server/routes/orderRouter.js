const express = require('express')
const orderController = require('../controllers/OrderController')
const router = express.Router()

router.get('/', orderController.getOrder)
router.post('/', orderController.makeOrder)


module.exports = router