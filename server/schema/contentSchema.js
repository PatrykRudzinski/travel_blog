const mongoose = require('mongoose');

const { Schema } = mongoose;

// const contentPart = {
//   type: {
//     type: String,
//     required: true,
//     enum: ['text', 'image', 'slider', 'map', 'video'],
//   },
//   text: String,
//   src: String,
//   pins: [String],
//   sliderSrc: [String],
// }

// const contentSchema = new Schema({
//   content: contentPart,
// });

const contentSchema = new Schema({
  content: String,
  order: Number,
});

module.exports = mongoose.model('content', contentSchema);
