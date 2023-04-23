const router = require("express").Router();
const {
  addProduct,
  getProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.post("/add", addProduct);
router.get("/get", getProduct);
router.post("/update/:id", editProduct);
router.delete("/delete/:id" , deleteProduct)
module.exports = router;
