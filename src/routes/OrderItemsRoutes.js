const { Router } = require("express");
const OrderItemsController = require("../controllers/OrdersItemsController.js");

const orderItemsController = new OrderItemsController();
const router = Router();

router.get("/orderItems", (req, res) => orderItemsController.getAll(req, res));
router.get("/orderItems/:id", (req, res, next) =>
  orderItemsController.getOneById(req, res, next)
);
router.post("/orderItems", (req, res, next) =>
  orderItemsController.createNew(req, res, next)
);
router.put("/orderItems/:id", (req, res) =>
  orderItemsController.update(req, res)
);
router.delete("/orderItems/:id", (req, res) =>
  orderItemsController.delete(req, res)
);

module.exports = router;
