"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Order, {
        foreignKey: "customer_id",
      });
    }
  }
  Customer.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          isString: (value) => {
            if (typeof value !== "string") {
              throw new Error("customer name must be a string");
            }
          },
          len: {
            args: [2],
            msg: "customer name must be at least 2 characters",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "invalid e-mail",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          isString: (value) => {
            if (typeof value !== "string") {
              throw new Error("address must be a string");
            }
          },
          len: {
            args: [4],
            msg: "address must be at least 4 characters",
          },
        },
      },
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
      tableName: "customers",
    }
  );
  return Customer;
};
