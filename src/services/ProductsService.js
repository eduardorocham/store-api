const Services = require('./Services.js');

class ProductsService extends Services {
  constructor() {
    super('Product');
  }
}

module.exports = ProductsService;