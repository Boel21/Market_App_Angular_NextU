var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productsSchema = new Schema({
    img:{type: String, required: true},
	nombre:{ type: String, required: true }, 
    precio: { type: String, required: true }, 
    cant_dispo: { type: String, required: true },
    });

var products = mongoose.model('products', productsSchema)

module.exports = products;