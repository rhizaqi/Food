const { Order } = require("../models/");

async function authorization(req, res, next) {
  try {
    // console.log("masuk di authorization");
    console.log(req.user, `info user di author`);

    const check = await Order.findAll({
      where: {
        userId: req.user.id,
      },
    });

    console.log(check, 990999);

    if (!user) {
      return res.status(404).json({ message: "NotFound" });
    }

    if (req.user.role === "customer") {

    }

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;
