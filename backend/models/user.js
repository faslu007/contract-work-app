const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    loginPin: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['contractor', 'employee', 'customer', 'superAdmin'],
        default: 'contractor'
    },
    phone: {
        type: String,
        max: 10,
        min: 10,
        required: true
    },
    communicationPhone: {
        type: Number,
        max: 10,
        min: 10,
        required: false
    },
    email: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('User', userSchema);