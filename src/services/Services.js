const dataSource = require('../models/index.js');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.modelName].findAll();
  }
}

module.exports = Services;