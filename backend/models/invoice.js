const mongoose = require('mongoose');


const remindersSchema = mongoose.Schema({
    reminderDate: {
        type: Date,
        required: true
    },
    reminderMode: {
        type: String,
        required: true,
        default: 'Watsapp'
    }
})


const invoiceSchema = mongoose.Schema({
    invoice_id: {
        type: Number,
        required: true,
        unique: true
    },
    invoice_date: {
        type: String,
        required: true
    },
    invoice_due_date: {
        type: String,
        required: true
    },
    invoice_amount: {
        type: Number,
        required: true
    },
    invoice_status: {
        type: String,
        required: true
    },
    customer_id: {
        type: Number,
        required: true
    },
    reminders: remindersSchema,
    invoice_items: {
        type: Array,
        default: [],
        required: true
    },
    invoice_total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    },
    paidAmount: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    payments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    }],

});


module.exports = mongoose.model('Invoice', invoiceSchema)