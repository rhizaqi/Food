const { Category } = require("../models/");

module.exports = class CategoryController {
  static async getAllCategories(req, res, next) {
    try {
      const categories = await Category.findAll();

      res.status(200).json(categories);
    } catch (error) {
      console.log(error, `error get all categories`);
      throw error;
    }
  }
};
