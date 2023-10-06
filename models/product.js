const db = require("../util/database")
module.exports = class Product {
  constructor(title, imageUrl, price,description,id ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this.id = id;
  }

  save() {
    console.log(this,"Ram")
    if(this.id){
      return db.execute("UPDATE products SET title = ?, imageUrl = ?, price = ?, description = ? WHERE id = ?", [this.title, this.imageUrl, this.price, this.description, this.id]);
    }else{
      return db.execute("INSERT INTO products (title, imageUrl, price, description) VALUES (?, ?, ?, ?)", [this.title, this.imageUrl, this.price, this.description])
    }
  }

  static fetchAll() {
    return (
      db.execute("SELECT * FROM products")
    )
  }

  static particular(productID) {
    return (
      db.execute("SELECT * FROM products WHERE products.id = ?", [productID])
    )
  }

  static deleteProd(prodId) {
    return db.execute("DELETE FROM products WHERE products.id = ?",[prodId])
  }
};
