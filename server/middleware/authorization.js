const { User } = require("../models/");

async function authorization(req, res, next) {
  try {
    console.log("masuk di authorization");
    console.log(req.user, `info user di author`);

    const user = await User.findByPk(req.user.id);

    
    
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;
