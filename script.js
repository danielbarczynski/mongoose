const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => console.log('Connected to MongoDB'));

run();
async function run() {
  const user = await User.create({
     name: 'Daniel',
      age: 24,
      hobbies: ['Coding', 'Gaming'],
      email: 'example@mail.com',
      address: {
        street: '123 Fake St',
        city: 'Springfield',
      }
     })  
  // user.name = 'Mela';
  // await user.save();
  console.log(user);
}