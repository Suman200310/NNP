const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  _id: String,
  name: { type: String, required: true },
  description: String,
  category: String,
  level: String,
  steps: [String],
  resources: [{ name: String, url: String }],
  duration: String,
  price: String,
  averageSalary: String,
  jobProspects: String,
  achievements: [String],
  benefits: [String],
  institutes: [{ name: String, url: String }],
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);