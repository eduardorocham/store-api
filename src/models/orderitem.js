"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_Item extends Model {
    static associate(models) {
      Order_Item.belongsTo(models.Order, {
        foreignKey: "order_id",
      });
      Order_Item.belongsTo(models.Product, {
        foreignKey: "product_id",
      });
    }
  }
  Order_Item.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order_Item",
      tableName: "order_items",
    }
  );
  return Order_Item;
};
