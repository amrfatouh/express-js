const { Product } = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product.ejs", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  let newProd = new Product(req.body.title);
  newProd.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop.ejs", { pageTitle: "Shop", products: Product.fetchAll() });
};
