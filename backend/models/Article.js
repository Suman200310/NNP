const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: String,
  content: String,
  category: String,
  author: String,
  readTime: String,
  date: Date,
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);