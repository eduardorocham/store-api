const Services = require('./Services.js');

class CustomersService extends Services {
  constructor() {
    super('Customer');
  }
}

module.exports = CustomersService;