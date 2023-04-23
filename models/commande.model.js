const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
  articles: [{ type: mongoose.Schema.Types.ObjectId }],
  date: { type: Date, default: Date.now()},
  price : {type : String}
});

module.exports = mongoose.model("Commande", CommandeSchema);
