class Controller {
  constructor(entityService, entity) {
    this.entityService = entityService;
    this.entity = entity;
  }

  async getAll(req, res) {
    try {
      const registersList = await this.entityService.getAllRegisters();
      return res.status(200).json(registersList);
    } catch(error) {
      return res.status(500).json({ message: `Server interanl error: ${error}` });
    }
  }

  async getOneById(req, res) {
    const { id } = req.params;

    try {
      const register = await this.entityService.getRegisterById(Number(id));
      return res.status(200).json(register);
    } catch(error) {
      return res.status(500).json({ message: `Server interanl error: ${error}` });
    }
  }

  async createNew(req, res) {
    const dataToCreation = req.body;

    try {
      const newRegisterCreated = await this.entityService.createNewRegister(dataToCreation);
      return res.status(201).json({ 
        message: `New ${this.entity} added with success!`, 
        data: newRegisterCreated 
      });
    } catch(error) {
      return res.status(500).json({ message: `Server interanl error: ${error}` });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const dataToUpdate = req.body;

    try {
      const wasUpdated = await this.entityService.updateRegister(Number(id), dataToUpdate);

      if (wasUpdated) {
        return res.status(200).json({
          message: `${this.entity} updated with sucess!`
        });
      }
    } catch(error) {
      return res.status(500).json({ message: `Server interanl error: ${error}` });
    }
  }
}

module.exports = Controller;