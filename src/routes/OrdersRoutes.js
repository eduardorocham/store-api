const { Router } = require("express");
const OrdersController = require("../controllers/OrdersController.js");

const ordersController = new OrdersController();

const router = Router();

router.get("/orders", (req, res) => ordersController.getOrders(req, res));
router.get("/orders/:id", (req, res, next) =>
  ordersController.getOneById(req, res, next)
);
router.post("/orders", (req, res, next) =>
  ordersController.createNew(req, res, next)
);
router.put("/orders/:id", (req, res) => ordersController.update(req, res));
router.delete("/orders/:id", (req, res) => ordersController.delete(req, res));

module.exports = router;
