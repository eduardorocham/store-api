const { Router } = require("express");
const CustomersController = require("../controllers/CustomersController.js");

const customersController = new CustomersController();

const router = Router();

router.get("/customers", (req, res, next) =>
  customersController.getCustomers(req, res, next)
);
router.get("/customers/:id", (req, res, next) =>
  customersController.getOneById(req, res, next)
);
router.post("/customers", (req, res, next) =>
  customersController.createNew(req, res, next)
);
router.put("/customers/:id", (req, res) =>
  customersController.update(req, res)
);
router.delete("/customers/:id", (req, res) =>
  customersController.delete(req, res)
);

module.exports = router;
