const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errorsController = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use(errorsController.get404);

app.listen(8000);
