var express = require('express');
var router = express.Router();

const productsModel = require('../models/products');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




/* Create Product */
router.post('/addProduct', async (req, res, next) => {   

  const product = new productsModel ({
    prodRef: req.body.prodRef,
    prodName: req.body.prodName, 
    prodCity: req.body.prodCity, 
    prodPrice: req.body.prodPrice
  });
  const productSaved = await product.save()
  console.log('product saved venant du backend', product)
 
  res.json({message: "The product has been saved", productSaved })
});


module.exports = router;
