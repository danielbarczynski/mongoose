const mongoose = require('mongoose');
const User = require('./User');

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected to MongoDB'));

run();
async function run() {
  // const user = await User.create({
  //    name: 'Daniel',
  //     age: 24,
  //     hobbies: ['Coding', 'Gaming'],
  //     email: 'example@mail.com',
  //     address: {
  //       street: '123 Fake St',
  //       city: 'Springfield',
  //     }
  //    })
  // user.name = 'Mela';
  // // await user.save();
  // const user = await User.findById('646be4f82a464dc6bb7f42d1');
  // user.bestFriend = await User.findById('646ba52de285a41a532aa2de');
  const user = await User.where('age')
    .gt(20)
    .where('name')
    .equals('Daniel')
    .populate('bestFriend')
    .limit(1);
  console.log(user);
}
