const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noWhiteSpaces = value => !/\s/.test(value);

const articleSchema = new Schema({
  isPublished: { type: Boolean, required: true },
  title: { type: String, required: true, unique: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  mainImage: { type: String, required: true },
  tags: [
    {
      type: String,
      validate: noWhiteSpaces,
    },
  ],
  createDate: { type: Number, required: true },
  lastUpdateDate: { type: Number, required: true },
  firstPublishedDate: { type: Number, required: true },
  author_ref: { type: String, required: true },
  content_ref: { type: String, required: true },
});
module.exports = mongoose.model('article', articleSchema);
