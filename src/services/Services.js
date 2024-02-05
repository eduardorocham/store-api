const dataSource = require("../models/index.js");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters(where = {}) {
    return dataSource[this.modelName].findAll({ where: { ...where } });
  }

  async getRegisterById(id) {
    return dataSource[this.modelName].findByPk(id);
  }

  async createNewRegister(registerData) {
    return dataSource[this.modelName].create(registerData);
  }

  async updateRegister(id, updateData) {
    return dataSource[this.modelName].update(updateData, {
      where: {
        id: id,
      },
    });
  }

  async deleteRegister(id) {
    return dataSource[this.modelName].destroy({
      where: { id: id },
    });
  }
}

module.exports = Services;
