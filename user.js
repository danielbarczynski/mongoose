const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 18,
    max: 65,
    required: true,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number!`,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
  updatedAt: Date,
  bestFriend: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hobbies: [String],
  address: addressSchema,
});

module.exports = mongoose.model('User', userSchema);
