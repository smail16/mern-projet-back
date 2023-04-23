const router = require("express").Router();
const { addCommande, getCommande, deleteCommande } = require("../controllers/commande.controllers");

router.post("/", addCommande);
router.get("/", getCommande)
router.delete("/:id", deleteCommande)


module.exports = router;
