const mongoose = require(mongoose);

const userSchema = mongoose.Schema({
    userName: {
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
        type: Number,
        max: 10,
        min: 10,
        required: true
    },
    communicationPhone: {
        type: Number,
        max: 10,
        min: 10,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);