const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/user.model");
const secret = config.get("secret");

const verifyAuth = async (req, res, next) => {
  let token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({ msg: "invalid token" });
    const user = await User.findById(decoded.id).populate("address").select("-password");
    console.log(user,'rrr')
    if (!user) return res.status(400).json({ msg: "unauth" });
    else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = verifyAuth;
