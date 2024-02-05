"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
      });
      Product.hasMany(models.Order_Item, {
        foreignKey: "product_id",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          isString: (value) => {
            if (typeof value !== "string") {
              throw new Error("product name must be a string");
            }
          },
          len: {
            args: [3],
            msg: "product name must have more then 2 characters",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          isString: (value) => {
            if (typeof value !== "string") {
              throw new Error("product description must be a string");
            }
          },
          len: {
            args: [10],
            msg: "product description must have more then 10 characters",
          },
        },
      },
      price: {
        type: DataTypes.FLOAT,
        validate: {
          isNumeric: {
            args: true,
            msg: "product price must be a float",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );
  return Product;
};
