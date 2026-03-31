const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  category: String,
  icon: String,
  roadmap: [String],
  duration: String,
  cost: String,
  resources: [{ name: String, url: String }],
  averageSalary: String,
  jobProspects: String,
  achievements: [String],
  benefits: [String],
  institutes: [{ name: String, url: String }],
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);