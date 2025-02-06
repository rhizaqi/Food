"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Food, {
        foreignKey: "foodId",
      });
      Order.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Order.init(
    {
      orderId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Order ID is required",
          },
          notEmpty: {
            msg: "Order ID is required",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "User ID is required",
          },
          notEmpty: {
            msg: "User ID is required",
          },
        },
      },
      foodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Food ID is required",
          },
          notEmpty: {
            msg: "Food ID is required",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name food is required",
          },
          notEmpty: {
            msg: "Name food is required",
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "CategoryId is required",
          },
          notEmpty: {
            msg: "CategoryId is required",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Image Url is required",
          },
          notEmpty: {
            msg: "Image Url is required",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price is required",
          },
          notEmpty: {
            msg: "Price is required",
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Quantity is required",
          },
          notEmpty: {
            msg: "Quantity is required",
          },
        },
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "TotalPrice is required",
          },
          notEmpty: {
            msg: "TotalPrice is required",
          },
        },
      },
      statusPayment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
