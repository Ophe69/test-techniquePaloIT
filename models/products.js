var mongoose = require('mongoose');

var productsSchemas = mongoose.Schema({
    prodRef: { type: String, required: true },
    prodName: { type: String}, 
    prodCity: { type: String}, 
    prodPrice: { type: Number},
});

const productsModel = mongoose.model('products', productsSchemas);

module.exports = productsModel;
