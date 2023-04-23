const Category = require("../models/category.model");

exports.addCategory = async (req, res) => {
  const title = req.body.title;
  Category.create({ title });
  res.status(200).json({ message: "Category Sucessfully added." });
};

exports.getCategory = async (req, res) => {
  Category.find()
    .then((allCategories) => {
      res.status(201).json(allCategories);
    })
    .catch((error) => {
      res.status(501).json({ msg: error.message });
    });
  // const title = req.params;
  // Category.find();
  // then((category) => res.status(200).json({ category })).catch((error) =>
  //   res.status(404).json({ message: error })
  // );
};

exports.editCategory = async (req, res) => {
  try {
    const editCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(editCategory);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    res.send({ msg: `${deletedCategory.title} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
