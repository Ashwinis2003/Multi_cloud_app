
const mongoose = require('mongoose');

const AppSchema = new mongoose.Schema({
  name: String,
  value: String
});

module.exports = mongoose.model('App', AppSchema);
