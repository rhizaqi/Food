const express = require('express')
const FoodController = require('../controllers/FoodController')
const router = express.Router()

router.get("/", FoodController.getFoods)
router.get("/:id", FoodController.foodPerId)

module.exports = router