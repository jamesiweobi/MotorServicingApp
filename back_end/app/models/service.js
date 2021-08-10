const mongoose = require('mongoose');
const { Schema } = mongoose;

// const priceSchema = new Schema({
//     name: {
//         type: String,
//     },
//     price: {
//         type: Number,
//         required: true
//     }
// });

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {},
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('service', serviceSchema);