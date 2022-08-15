const mongoose = require('mongoose');

const CondoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Condo name is required!'],
            minLength: [5, 'Name should be at least 5 characters long']
        },
        address: {
            type: String,
            required: [true, 'Condo address is required!'],
            minLength: [5, 'Address should be at least 5 characters long']
        },
        price: {
            type: Number,
            required: [true, 'Condo price is required!'],
            min: [0, 'Price should be a positive number!']
        },
        image: {
            type: String,
            required: [true, 'Condo image is required!']
        },
        description: {
            type: String
        }

    }, 
    {
    timestamps: true
    }
);

const Condo = mongoose.model('condo', CondoSchema);
module.exports = Condo;