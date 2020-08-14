var mongoose = require('mongoose');

// define the schema for Orders
var OrderSchema = new mongoose.Schema({
    "orderId": {
        type: Number
    },
    "userId": {
        type: Number
    },
    "subtotal": {
        type: Number
    },
    "date": {
        type: Date
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Order', OrderSchema);