var mongoose = require('mongoose');

var productsSchemas = mongoose.Schema({
    id: String,
    prodRef: String,
    prodName: String, 
    prodCity: String, 
    prodPrice: Number,
});

const productsModel = mongoose.model('products', productsSchemas);

module.exports = productsModel;
