const { User } = require("../models/");

module.exports = class UserController {
  static async getUser(req, res) {
    try {
      const data = await User.findAll();
      console.log(data, `<< iya?`);

      res.status(200).json(data);
    } catch (error) {
      console.log(error, `<< error nya`);

      throw error;
    }
  }
  static async login(req, res) {
    try {
        
    } catch (error) {
      throw error;
    }
  }
};
