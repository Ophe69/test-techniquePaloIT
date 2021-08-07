var express = require('express');
var router = express.Router();


const productsModel = require('../models/products');
const citiesModel = require('../models/cities');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @description Route add Cities = add a new city tag
 * @methode POST
 */
 router.post('/addCities', async (req, res, next) => {   
  //Validate request
  if(req.body.cityName == ""){
    res.status(400).json({message: "Entrer un nom de ville"});
  }else{
  //create new Product
  const city = new citiesModel ({
    cityName: req.body.cityName,
    
  });
  const citySaved = await city.save()
  console.log('CITY saved venant du backend', citySaved)
  
  res.json({citySaved} )
}
});

/**
 * @description Display cityTags
 * @methode GET
 */
 router.get('/cities', async (req, res, next) => { 
  citiesModel.find()
    .then(cities => res.status(200).json(cities))
    .catch(error => res.status(400).json({ error }));
 })

 /**
 * @description Remove cityTags
 * @methode DELETE
 */
 
 router.delete('/delete/:cityName',(req, res, next) => {
  /* productsModel.deleteOne({_id : req.params.id})
  .then(products => res.status(200).json({message: "objet supprimé"}))
  .catch(error => res.status(400).json({ error }));
  console.log("req params", returnDB) */

  const cityName = req.params.cityName;
  citiesModel.findOneAndDelete(cityName)
  .then(cityName => { 
    if(!cityName){
      res.status(404).json({message: `No city with ${cityName} to delete`})
    }else{
      console.log(cityName);
      res.status(200).json({message: "City has been successfully deleted!"})
    }
})

})


/**
 * @description Route add Products = add a new products
 * @methode POST
 */
router.post('/addProducts', async (req, res, next) => {   
  //Validate request
  if(req.body.prodRef == ""){
    res.status(400).json({message: "Remplissez tous les champs"});
  }else{
  //create new Product
  const product = new productsModel ({
    prodRef: req.body.prodRef,
    prodName: req.body.prodName, 
    prodCity: req.body.prodCity, 
    prodPrice: req.body.prodPrice
  });
  const productSaved = await product.save()
  console.log('product saved venant du backend', productSaved)
  
  res.json({message: "The product has been saved", productSaved })
}
});

/**
 * @description Route to display products
 * @methode GET/ 
 */

router.get('/products', (req, res, next) => {
  productsModel.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({ error }));
});


/**
 * @description Route to update product
 * @methode PUT/ 
 */
router.put('/update/:prodRef', (req, res, next) => {

/*     if(req.body.prodRef == ""){
      res.status(400).json({message: "Remplissez tous les champs"});
      return;
    }
 */
    const prodRef = req.params.prodRef;
    productsModel.findOneAndUpdate(prodRef, req.body, {useFindAndModify:true})
    .then(products => { 
      if(!products){
        res.status(404).json({message: `Cannot update product with ${prodRef}`})
      }else{
        console.log(products);
        res.status(200).json(products)
      }
  })
    .catch(error => res.status(500).json({ error }));
})


/**
 * @description Delete a product with specified id
 * @methode DELETE/ 
 */

router.delete('/delete/:prodRef',(req, res, next) => {
  /* productsModel.deleteOne({_id : req.params.id})
  .then(products => res.status(200).json({message: "objet supprimé"}))
  .catch(error => res.status(400).json({ error }));
  console.log("req params", returnDB) */

  const prodRef = req.body.prodRef;
  productsModel.findOneAndDelete(prodRef)
  .then(prodRef => { 
    if(!prodRef){
      res.status(404).json({message: `No product with ${prodRef} to delete`})
    }else{
      console.log(prodRef);
      res.status(200).json({message: "Product has been successfully deleted!"})
    }
})

})


module.exports = router;
