const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: String },
  address: { type: mongoose.Schema.Types.ObjectId },
  zip: { type: mongoose.Schema.Types.ObjectId },
  city: { type: mongoose.Schema.Types.ObjectId },
  commande : [{type: mongoose.Schema.Types.ObjectId}]
});

module.exports = mongoose.model("User", userSchema);
