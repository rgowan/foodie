const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

module.exports = mongoose.model('food', foodSchema);
