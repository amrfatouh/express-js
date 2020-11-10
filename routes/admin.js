const path = require("path");

const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product.ejs", { pageTitle: "Add Product" });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
