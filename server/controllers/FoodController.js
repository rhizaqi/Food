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

  static async addFood(req, res) {
    try {
      const { name, price, description, categoryId } = req.body;

       await Food.create({
        name, price, description, categoryId
      })

      res.status(201).json({
        message:"New food just got added"
      })
      
    } catch (error) {
      console.log(error);
      
      throw error;
    }
  }

  static async updateFood(req, res) {
    try {
      const { name, price, description, categoryId } = req.body;

      const id = req.params

      const putFood = await Food.update ({
        name, price, description, categoryId
      }, {
        where: id
      })

      res.status(201).json({
        message:"Food updated successfully"
      })

    } catch (error) {
      console.log(error);
      
      throw error;
    }
  }

  static async deleteFood(req, res) {
    try {
      const { id } = req.params;

      const findFood = await Food.findByPk(id)

      if(!findFood){
        throw {
          name:"NotFound"
        }
      }
      
      await Food.destroy({
        where: {
          id
        }
      })

      res.status(200).json({
        message:`Food just deleted successfully`
      })
    } catch (error) {
      throw error;
    }
  }
};
