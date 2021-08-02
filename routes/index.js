var express = require('express');
var router = express.Router();

const productsModel = require('../models/products')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Read Product */
router.get('/read', async (req,res) =>{
  res.render('index', { products });
});



/* Create Product */
router.post('/addProduct', async (req, res, next) => {   

  var result = false;
  var error = "";
  var message = "";


  const product = new productsModel ({
    prodRef: req.body.prodRef,
    prodName: req.body.prodName, 
    prodCity: req.body.prodCity, 
    prodPrice: req.body.prodPrice
  });
  //console.log('product saved venant du backend', product)
  const productSaved = await product.save()
  /* .then(() => res.status(201).json({ message: 'Objet enregistré !', productSaved}))
  .catch(error => res.status(400).json({ error })); */
  res.json({result, error, message: 'produit bien créé'})
});



/* router.post('/add', async (req,res) =>{
  const prodRef = req.body.prodRef;
  const prodName = req.body.prodName;
  const prodCity = req.body.prodCity;
  const prodPrice = req.body.prodPrice;

  //console.log(req.body)

  const newProduct = new productsModel({
    prodRef = prodRef,
    prodName = prodName,
    prodCity = prodCity,
    prodPrice = prodPrice,
  });
  const productSaved = await newProduct.save();

  //console.log(productSaved);

  res.json({ result: true })
  //res.render('index', { products });
}); */



module.exports = router;
