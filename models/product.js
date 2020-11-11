const fs = require("fs");
const path = require("path");

const p = path.join(process.cwd(), "data", "products.json");

const readProductsFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) cb([]);
    else cb(JSON.parse(fileContent));
  });
};

exports.Product = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    readProductsFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
    });
  }
  static fetchAll(cb) {
    readProductsFile(cb);
  }
};
