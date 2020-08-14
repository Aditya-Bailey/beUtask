var mongoose = require('mongoose');

// define the schema for Pricing and other details of products with variations
var UserSchema = new mongoose.Schema({
    "userId": {
        type: Number
    },
    "name": {
        type: String
    },
    "noOfOrders": {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('User', UserSchema);