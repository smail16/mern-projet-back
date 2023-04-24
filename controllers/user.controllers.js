const User = require("../models/user.model");
const Address = require("../models/address.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");

exports.register = async (req, res) => {
  const { fullName, email, password, address, zip, city, phone } = req.body;
  const existantUser = await User.findOne({ email });
  if (existantUser) res.status(409).json({ msg: "user already exist" });
  try {
    const newUser = new User({
      fullName,
      email,
      phone,
    });
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);
    newUser.password = hash;
    const newAddress = new Address({
      address,
      zip,
      city,
    });

    newAddress.save();
    newUser.address = newAddress._id;

    await newUser.save();
    const payload = {
      id: newUser._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        ...newUser._doc,
        password: null,
        address: newAddress,
      },
    });
    // res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).populate("address").populate("commande");
    if (!user) return res.status(404).json({ msg: "wrong information" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "wrong information" });
    const payload = {
      id: user._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone : user.phone,
        commande : user.commande,
        address: user.address
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.auth = (req, res) => {
  res.send(req.user);
};
