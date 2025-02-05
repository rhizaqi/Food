const { Order, Food, User } = require("../models/");

module.exports = class orderController {
  static async getOrder(req, res, next) {
    try {
      const allOrder = await Order.findAll({
        include: [User, Food],
      });

      res.status(200).json(allOrder);
    } catch (error) {
      next();
    }
  }

  static async makeOrder(req, res, next) {
    try {
      const { foodId, name, categoryId, imgUrl, price, quantity, totalPrice } =
        req.body;

      console.log(req.user, `controller orderrrrrr`);
      console.log(req.body, `inputan body`);

      let orderId = `1231231231`;

      const createOrder = await Order.create({
        orderId: orderId,
        userId: req.user.id,
        foodId,
        name,
        categoryId,
        imgUrl,
        price,
        quantity,
        totalPrice,
        statusPayment: "pending",
      });

      res.status(201).json({
        createOrder,
      });
    } catch (error) {
      next();
    }
  }

  static async allMyOrder(req, res, next) {
    try {
      const { userId } = req.params;

      const myOrders = await Order.findAll({
        where: {
          userId,
        },
      });

      res.status(200).json({
        myOrders,
      });
    } catch (error) {
      // console.log(error,`one order`);
      next();
    }
  }

  static async userOneOrder(req, res, next) {
    try {
      const { orderId } = req.params;

      console.log(orderId, `??`);

      const currentOrder = await Order.findOne({
        where: {
          orderId,
        },
      });

      res.status(200).json({
        currentOrder,
      });
    } catch (error) {
      next();
    }
  }

  static async updateOrder(req, res, next) {
    try {
      //update users order based on the id of the order
    } catch (error) {
      next(error);
    }
  }

  static async deleteOrder(req, res, next) {
    try {
      //delete users order based on the id of the order
    } catch (error) {
      next(error);
    }
  }
};
