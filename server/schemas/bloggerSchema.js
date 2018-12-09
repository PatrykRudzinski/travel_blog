const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true }
})

module.exports = mongoose.model('blogger', bloggerSchema)