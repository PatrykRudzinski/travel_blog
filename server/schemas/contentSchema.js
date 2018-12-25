const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Type = new Schema({
  type: String,
  required: true,
  enum: ['text', 'image', 'slider', 'map', 'video'],
});

const contentSchema = new Schema({
  type: Type,
  text: String,
  src: String,
  pins: [String],
  sliderSrc: [String],
});

module.exports = mongoose.model('content', contentSchema);
