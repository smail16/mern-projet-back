const router = require("express").Router();
const { addCart } = require("../controllers/cart.controllers");


router.post("/add", addCart);

module.exports = router;