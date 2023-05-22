const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String
})

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  bestFriend: mongoose.Schema.Types.ObjectId,
  hobbies: [String],
  address: addressSchema
})

module.exports = mongoose.model('User', userSchema);