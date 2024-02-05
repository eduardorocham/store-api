"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: "category_id",
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          isString: (value) => {
            if (typeof value !== "string") {
              throw new Error("category name must be a string");
            }
          },
          len: {
            args: [5],
            msg: "category name must be at least 5 characters",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          isString: (value) => {
            if (typeof value !== "string") {
              throw new Error("category description must be a string");
            }
          },
          len: {
            args: [10],
            msg: "category description must be at least 10 characters",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
    }
  );
  return Category;
};
