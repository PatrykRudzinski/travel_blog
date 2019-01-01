const mongoose = require('mongoose');

const { Schema } = mongoose;

const contentSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['text', 'image', 'slider', 'map', 'video'],
  },
  text: String,
  src: String,
  pins: [String],
  sliderSrc: [String],
});

module.exports = mongoose.model('content', contentSchema);
