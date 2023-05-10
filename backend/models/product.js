const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 2000
    },
    brand: {
        type: String,
        minlength: 3,
        maxlength: 255
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    mrp: {
        type: Number,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    measurement: {
        type: String,
    },
    units: {
        type: Number,
    },
    vendor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    }],
});


module.exports = mongoose.model('Product', productSchema);