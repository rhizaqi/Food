const { comparePassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
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

  static async register(req, res,next) {
    try {
      const { name, email, password } = req.body;

      const newUser = await User.create({
        name,
        email,
        password,
      });

      console.log(newUser, `<<<<??`);

      res.status(200).json({
        message: "Successfully registered",
      });
    } catch (error) {
      // console.log(error, `???`);
      // throw error;
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      // console.log(req.body, `??/`);

      const goIn = await User.findOne({
        where: {
          email,
        },
      });

      // console.log(goIn, `User <<<<`);

      if (!goIn) {
        throw error;
      }

      const checkPassword = comparePassword(password, goIn.password);

      console.log(checkPassword, `??`);

      const access_token = signToken({
        id: goIn.id,
        name: goIn.name,
      });

      // console.log(access_token, `tokenn`);

      res.status(200).json({
        access_token,
      })
      
      // next()
    } catch (error) {
      throw error;
    }
  }
};
