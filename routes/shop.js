const path = require("path");

const express = require("express");

const adminRouter = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop.ejs", { pageTitle: "Shop", products: adminRouter.products });
});

module.exports = router;
