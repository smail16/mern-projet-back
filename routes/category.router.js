const router = require("express").Router();
const {
  addCategory,
  getCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/category.controller");

router.post("/", addCategory);
router.get("/", getCategory);
router.get("/:id", getCategory);
router.post("/", editCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
