const express = require('express')
const FoodController = require('../controllers/FoodController')
const router = express.Router()

router.get("/", FoodController.getFoods)
router.post("/", FoodController.addFood)
router.get("/:id", FoodController.foodPerId)
router.put("/:id", FoodController.updateFood)
router.delete("/:id", FoodController.deleteFood)


module.exports = router