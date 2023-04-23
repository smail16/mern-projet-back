const router = require("express").Router();
const {
  addArticle,
  getArticle,
  editArticle,
  deleteArticle,
  getArticles,
} = require("../controllers/article.controllers");

router.post("/", addArticle);
router.get("/:id", getArticle);
router.get("/", getArticles);
router.post("/:id", editArticle)
router.delete("/:id", deleteArticle)

module.exports = router;
