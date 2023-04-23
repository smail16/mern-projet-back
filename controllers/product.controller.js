const Product = require("../models/product.model");

exports.addProduct = async (req, res) => {
  const title = req.body.title;
  const categoryId = req.body.categoryId;

  Product.create({ title, categoryId });
  res.status(200).json({ message: "Product sucessfully added." });
};

exports.getProduct = async (req, res) => {
  try {
    const allProducts = await Product.find();
    allProducts
      ? res.status(201).json(allProducts)
      : res.status(401).json({ msg: "getAll error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
  // const { categoryId, page } = req.params;
  // Product.find({ title, categoryId }, { skip: 10 * page, limit: 10 });
  // then((products) => res.status(200).json({ products })).catch((error) =>
  //   res.status(404).json({ message: error })
  // );
};

exports.editProduct = async (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then((editProduct) => {
      res.status(201).send(editProduct);
    })
    .catch((error) => {
      res.status(501).json({ msg: error.message });
    });
};


exports.deleteProduct= async (req,res)=>{
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send({ msg: `${deletedProduct.title} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
}