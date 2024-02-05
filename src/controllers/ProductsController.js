const { Op } = require("sequelize");

const Controller = require("./Controller.js");
const ProductsService = require("../services/ProductsService.js");

const productsService = new ProductsService();

class ProductsController extends Controller {
  constructor() {
    super(productsService, "product");
  }

  async getProducts(req, res, next) {
    const { category_id, name, lowest_price, biggest_price } = req.query;

    const where = {};

    if (category_id) {
      where.category_id = category_id;
    }

    if (name) {
      where.name = {
        [Op.like]: `%${name}%`,
      };
    }

    if (lowest_price || biggest_price) {
      where.price = {};
      if (lowest_price) where.price[Op.gte] = lowest_price;
      if (biggest_price) where.price[Op.lte] = biggest_price;
    }

    try {
      const productsList = await productsService.getAllRegisters(where);
      return res.status(200).json(productsList);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductsController;
