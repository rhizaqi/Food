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
      let orders = req.body;

      // bikin order id yg unique
      let formOrderId = new Date().toLocaleDateString("id-ID").split("/");
      let orderId =
        formOrderId.join("") +
        `-${Math.floor(Math.random() * 100 + 1)}` +
        `-${Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(0, 8)}`;

      let ordersToInput = [];

      // di loop sesuai dengan banyaknya array orderan
      for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const {
          foodId,
          name,
          categoryId,
          imgUrl,
          price,
          quantity,
          totalPrice,
        } = order;

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

        // tiap object order di masukkan ke database
        ordersToInput.push(createOrder);
      }

      res.status(201).json({
        orders: ordersToInput,
      });
    } catch (error) {
      next(error);
    }
  }
  static async allMyOrder(req, res, next) {
    try {
      console.log(req.user);
      console.log(req.params);

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
