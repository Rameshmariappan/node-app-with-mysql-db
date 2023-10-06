const Cart = require('../models/cart');
const Product = require('../models/product');
const db = require("../util/database")
exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows,second])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch((err)=>console.log(err))
};

exports.getProductDetail = (req,res,next)=>{
  const productId = req.params.productID
  console.log(productId,"productId")
  Product.particular(productId).then(([resArray])=>{
    console.log(resArray)

    res.render("shop/product-detail",{
      path:'/products',
      prod:resArray[0],
      pageTitle:"Description"
    })
  }).catch((err)=>console.log(err))
}

exports.addToCart = (req,res,next)=>{
  Product.particular(req.body.productId,(product)=>{
    Cart.addToCart(req.body.productId,product.price)
    // console.log(product)
  })
  res.redirect("/cart")
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(([rows,second])=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch((err)=>console.log(err))
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
