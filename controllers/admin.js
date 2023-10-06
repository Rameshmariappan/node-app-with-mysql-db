const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    edit: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl,price,description);
  console.log(req.body,"body")
  product.save().then((response)=>{
    res.redirect('/');
  }).catch((err)=>console.log(err))
};

exports.EditProduct = (req, res, next) => {
  let editMode = req.query.edit
  if (!editMode) {
    res.redirect("/")
  }
  const id = req.params.productId
  Product.particular(id).then(([resArray])=>{
    console.log(resArray)
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/edit-product',
      edit: true,
      prod: resArray[0]
    });
  }).catch((err)=>console.log(err))
  console.log(editMode, "edit mode", req.url)
};

exports.editProductPost = (req, res, next) => {
  const updatedid = req.body.id
  const updatedtitle = req.body.title;
  const updatedimageUrl = req.body.imageUrl;
  const updatedprice = req.body.price;
  const updateddescription = req.body.description;
  const updatedproduct = new Product(updatedtitle, updatedimageUrl, updatedprice,  updateddescription,updatedid );
  updatedproduct.save().then((response)=>{
    res.redirect('/');
  }).catch((err)=>console.log(err))
}


exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows, secondArray]) => {
    res.render('admin/products', {
      prods: rows,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch((err)=>console.log(err))
};

exports.deleteProduct = (req, res, next) => {
  const prodID = req.body.prodid
  Product.deleteProd(prodID).then((response)=>{
    res.redirect("/")
  }).catch((err)=>console.log(err))
}
