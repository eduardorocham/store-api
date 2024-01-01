class Controller {
  constructor(entityService) {
    this.entityService = entityService;
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
      const register = await this.entityService.getRegisterById(id);
      return res.status(200).json(register);
    } catch(error) {
      return res.status(500).json({ message: `Server interanl error: ${error}` });
    }
  }
}

module.exports = Controller;