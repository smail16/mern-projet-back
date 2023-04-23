const router = require("express").Router();
const { addAddress, getAdress, editAddress, deleteAddress } = require("../controllers/address.controllers");


router.post("/add", addAddress);
router.get("/get", getAdress);
router.post("/update/:id", editAddress)
router.delete("/delete/:id", deleteAddress)

module.exports = router;