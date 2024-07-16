const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Mobile: {
        type: Number,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Email: {
        type: String, // Assuming the price is stored as a string, adjust if needed
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Pincode: {
        type: String,
        required: true
    }

});

const FetchModal = mongoose.model('logins', productSchema);

module.exports = FetchModal;