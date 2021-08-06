var mongoose = require('mongoose');

var citiesSchemas = mongoose.Schema({
    cityName: { type: String, required: true },
    
});

const citiesModel = mongoose.model('cities', citiesSchemas);

module.exports = citiesModel;