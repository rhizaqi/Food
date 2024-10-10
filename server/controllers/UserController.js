const { User } = require("../models/");

module.exports = class UserController {
  static async getUser(req, res) {
    try {
      const data = await User.findAll();
      // console.log(data, `<< iya?`);

      res.status(200).json(data);
    } catch (error) {
      console.log(error, `<< error nya`);

      throw error;
    }
  }

  static async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const newUser = await User.create({
        name,
        email,
        password,
      });

      console.log(newUser,`<<<<??`);
      

      res.status(200).json({
        message: "Successfully registered",
      });
    } catch (error) {
      console.log(error, `???`);

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
