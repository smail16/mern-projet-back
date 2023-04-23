const Article = require("../models/article.model");

exports.addArticle = async (req, res) => {
  const { title, description, price, images, categoryId , sizes , isFavourite } = req.body;
  Article.create({ title, description, price, images, categoryId , sizes ,isFavourite})
    .then(() => res.status(200).json({ message: "Article sucessfully added." }))
    .catch((error) => res.status(404).json({ message: error }));
};

exports.getArticle = async (req, res) => {
  console.log(req.params);
  Article.findById(req.params.id)
    .then((articles) => res.status(200).json( articles ))
    .catch((error) => res.status(404).json({ message: error }));
  
};

exports.getArticles = async (req, res) => {
  Article.find()
  .then((articles) => res.status(200).json( articles ))
  .catch((error) => res.status(404).json({ message: error }));
  };

exports.editArticle = async (req, res) => {
  Article.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  )
  .then((articles) => res.status(201).json( articles ))
  .catch((error) => res.status(404).json({ message: error }));
};

exports.deleteArticle = async (req, res) => {
  Article.findByIdAndDelete(req.params.id)
  .then((articles) => res.status(201).json( articles ))
  .catch((error) => res.status(404).json({ message: error }));
  
};
