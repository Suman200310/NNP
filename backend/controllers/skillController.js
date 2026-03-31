const Skill = require('../models/Skill');

// GET /api/skills
const getSkills = async (req, res) => {
  try {
    const { search, category } = req.query;
    const filter = {};

    if (category && category !== 'All') filter.category = category;
    if (search) filter.name = { $regex: search, $options: 'i' };

    const skills = await Skill.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: skills.length, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// GET /api/skills/:id
const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findOne({ _id: req.params.id });
    if (!skill) return res.status(404).json({ success: false, message: 'Skill not found' });
    res.json({ success: true, data: skill });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

module.exports = { getSkills, getSkillById };