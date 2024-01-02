const Controller = require('./Controller.js');
const ProductsService = require('../services/ProductsService.js');

const productsService = new ProductsService();

class ProductsController extends Controller {
  constructor() {
    super(productsService, 'product');
  }
}

module.exports = ProductsController;