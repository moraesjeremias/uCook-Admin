const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    carbs: {
        type: Number,
        required: true,
    },
    category: String,
    img_url: String,
});

module.exports = mongoose.model('Products', ProductsSchema);