'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, {
        foreignKey: 'customer_id'
      });
      Order.hasMany(models.Order_Item, {
        foreignKey: 'order_id'
      });
    }
  }
  Order.init({
    order_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return Order;
};