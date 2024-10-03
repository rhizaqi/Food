const { where } = require("sequelize");
const { Food } = require("../models/");

module.exports = class FoodController {
  static async getFoods(req, res) {
    try {
      //   console.log(req, `req ??`);
      const data = await Food.findAll();

      res.status(200).json(data);
    } catch (error) {
      console.log("<< error");
      throw error;
    }
  }

  static async foodPerId(req, res) {
    try {
      const { id } = req.params;

      const data = await Food.findByPk(id);

      res.status(200).json(data);
      // const
    } catch (error) {
      console.log("error <<");
      throw error;
    }
  }

  static async addFood(req, res){
    try {
        const {name, price, description,categoryId} = req.body

    } catch (error) {
        throw error
    }
  }
};
