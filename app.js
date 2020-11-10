const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.use("/admin", adminRouter.router);
app.use(shopRouter);

app.use((req, res, next) => {
  res.render("404.ejs", { pageTitle: "Page Not Found" });
});

app.listen(8000);
