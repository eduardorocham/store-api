const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController.js");

const productsController = new ProductsController();

const router = Router();

router.get("/products", (req, res, next) =>
  productsController.getProducts(req, res, next)
);
router.get("/products/:id", (req, res, next) =>
  productsController.getOneById(req, res, next)
);
router.post("/products", (req, res, next) =>
  productsController.createNew(req, res, next)
);
router.put("/products/:id", (req, res) => productsController.update(req, res));
router.delete("/products/:id", (req, res) =>
  productsController.delete(req, res)
);

module.exports = router;
