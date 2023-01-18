const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  ciscoId: String,
  name: String,
  departmentId: String,
});

mongoose.model('users', userSchema);
