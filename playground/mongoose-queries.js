const {
  ObjectID
} = require('mongodb');
const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

var id = '5bfeb697a896674e005593af'

if (!ObjectID.isValid(id)) {
  return console.log('Id not valid')
}

User.findById(id).then(user => {
  if (!user) {
    return console.log('Id not found')
  }
  console.log('User by id', user)
}).catch(e => console.log(e))

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo By Id', todo)
// }).catch(e => console.log(e))
