const Career = require('../models/Career');

// GET /api/careers — with optional search & category filter
const getCareers = async (req, res) => {
  try {
    const { search, category } = req.query;
    const filter = {};

    if (category && category !== 'All') filter.category = category;
    if (search) filter.title = { $regex: search, $options: 'i' };

    const careers = await Career.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: careers.length, data: careers });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// GET /api/careers/:id
const getCareerById = async (req, res) => {
  try {
    const career = await Career.findOne({ _id: req.params.id });
    if (!career) return res.status(404).json({ success: false, message: 'Career not found' });
    res.json({ success: true, data: career });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

module.exports = { getCareers, getCareerById };