const Article = require("../models/article.model");
const config = require("config");
const db = config.get("db");
const mongoose = require("mongoose");
const articles = [
  {
    categoryId: 0,
    images: [
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_1_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_4_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_6_8.jpg?t=1678376307443&imwidth=1024",
    ],
    title: "HOUSEMARK GRAPHIC TEE - T-shirt imprimé",
    price: "24.99",
    isFavourite: true,
    sizes: [
      { size: "medium", quantity: 60 },
      { size: "large", quantity: 10 },
      { size: "xl", quantity: 10 },
    ],
  },
  {
    categoryId: 1,
    images: [
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_1_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_4_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_6_8.jpg?t=1678376307443&imwidth=1024",
    ],
    title: "Pantalon de survêtement",
    price: "49",
    isFavourite: true,
    sizes: [
      { size: "medium", quantity: 10 },
      { size: "large", quantity: 10 },
      { size: "xl", quantity: 10 },
    ],
  },
  {
    categoryId: 0,
    images: [
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_1_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_4_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_6_8.jpg?t=1678376307443&imwidth=1024",
    ],
    title: "Pantalon de survêtement",
    price: "49",
    isFavourite: true,
    sizes: [
      { size: "medium", quantity: 10 },
      { size: "large", quantity: 10 },
      { size: "xl", quantity: 10 },
    ],
  },
  {
    categoryId: 0,
    images: [
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_1_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_4_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_6_8.jpg?t=1678376307443&imwidth=1024",
    ],
    title: "Pantalon de survêtement",
    price: "49",
    isFavourite: true,
    sizes: [
      { size: "medium", quantity: 10 },
      { size: "large", quantity: 10 },
      { size: "xl", quantity: 10 },
    ],
  },
  {
    categoryId: 0,
    images: [
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_1_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_4_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_6_8.jpg?t=1678376307443&imwidth=1024",
    ],
    title: "Pantalon de survêtement",
    price: "49",
    isFavourite: true,
    sizes: [
      { size: "medium", quantity: 10 },
      { size: "large", quantity: 10 },
      { size: "xl", quantity: 10 },
    ],
  },
  {
    categoryId: 0,
    images: [
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_1_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_4_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_6_8.jpg?t=1678376307443&imwidth=1024",
    ],
    title: "Pantalon de survêtement",
    price: "49",
    isFavourite: false,
    sizes: [
      { size: "medium", quantity: 10 },
      { size: "large", quantity: 10 },
      { size: "xl", quantity: 10 },
    ],
  },
  {
    categoryId: 0,
    images: [
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_1_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_4_8.jpg?t=1679990119848&imwidth=1024",
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_6_8.jpg?t=1678376307443&imwidth=1024",
    ],
    title: "Pantalon de survêtement",
    price: "49",
    isFavourite: true,
    sizes: [
      { size: "medium", quantity: 60 },
      { size: "large", quantity: 10 },
      { size: "xl", quantity: 10 },
    ],
  },
];

mongoose.connect(db).then(() => {
  console.log("MongoDB connected");
  // console.log(res);
  articles.forEach((a) => {
    const {
      title,
      description,
      price,
      images,
      categoryId,
      isFavourite,
      sizes,
    } = a;
    Article.create({
      title,
      description,
      price,
      images,
      categoryId,
      isFavourite,
      sizes,
    })
      .then(() => console.log("sucess"))
      .catch((error) => console.log(error));
  });
});
