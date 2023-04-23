const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: String, required: true },
  images: [{ type: String, required: true }],
  selectedSize: { type: String, required: false, default: null },
  selectedQuantity: { type: String, required: false, default: null },
  sizes: [{ type: Object }],
  categoryId: {
    type: Number,
    required: true,
    enum : [0 , 1],
  },
  // id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Product",
  //   required: true,
  // },
  isFavourite: { type: Boolean, required: false, default: false },
  
});

module.exports = mongoose.model("Article", ArticleSchema);
