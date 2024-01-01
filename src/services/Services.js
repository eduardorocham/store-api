const dataSource = require('../models/index.js');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.modelName].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.modelName].findByPk(id);
  }
  
  async createNewRegister(registerData) {
    return dataSource[this.modelName].create(registerData);
  }
}

module.exports = Services;