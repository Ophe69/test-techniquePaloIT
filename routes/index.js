var express = require('express');
var router = express.Router();

const productsModel = require('../models/products');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




/* CREATE PRODUCT */
/* méthode async await */
router.post('/products', async (req, res, next) => {   

  const product = new productsModel ({
    prodRef: req.body.prodRef,
    prodName: req.body.prodName, 
    prodCity: req.body.prodCity, 
    prodPrice: req.body.prodPrice
  });
  const productSaved = await product.save()
  console.log('product saved venant du backend', productSaved)
  
  res.json({message: "The product has been saved", productSaved })
});

/* DISPLAY PRODUCT */
/* méthode then */

router.get('/products', (req, res, next) => {
  productsModel.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({ error }));
});

/* router.get('/products', async (req, res, next) => {
  const productsList = await products.find()
    
    console.log("reponse back de la route get", productsList);
}); */

/* UPDATE PRODUCT */



/* DELETE PRODUCT */

router.delete('/products/:prodRef', async (req, res, next) => {
  const returnDB = await productsModel.deleteOne({prodRef : req.params.prodRef})

  let result = false
  if(returnDb.deletedCount == 1){
    result = true
  }

  res.json({result})
})


module.exports = router;
