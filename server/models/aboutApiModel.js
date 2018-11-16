const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bloger = new Schema({
    firstName: String,
    lastName: String,
    imageUrl: String,
    description: String
})

const aboutApiModel = new Schema({
    about: String,
    blogers : [Bloger]
})
module.exports = mongoose.model('about', aboutApiModel)