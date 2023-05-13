const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


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
        // required: true
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
        type: String,
        max: 10,
        min: 10,
        required: false
    },
    email: {
        type: String,
        required: false
    },
},
    {
        timestamps: true,
    });

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);