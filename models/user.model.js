const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: String },
  address: { type: mongoose.Schema.Types.ObjectId , ref : "Address"  },
  // zip: { type: mongoose.Schema.Types.ObjectId },
  // city: { type: mongoose.Schema.Types.ObjectId },
  commande : [{type: mongoose.Schema.Types.ObjectId , ref :"Commande"}],
});

module.exports = mongoose.model("User", userSchema);
