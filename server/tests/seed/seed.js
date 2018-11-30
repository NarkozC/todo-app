const {
  ObjectID
} = require('mongodb');
const jwt = require('jsonwebtoken');

const {
  Todo
} = require('./../../models/todo');
const {
  User
} = require('./../../models/user');

const userOneId = new ObjectID()
const users = [{
  _id: userOneId,
  email: 'dogucan@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({
      _id: userOneId,
      access: 'auth'
    }, 'abc123').toString()
  }]
}, {
  _id: new ObjectID(),
  email: 'sasioglu@example.com',
  password: 'userTwoPass'
}]

const populateUsers = done => {
  User.remove({})
    .then(() => {
      var userOne = new User(users[0]).save()
      var userTwo = new User(users[1]).save()

      return Promise.all([userOne, userTwo])
    })
    .then(() => done())
}

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    completed: true,
    completedAt: 333
  },
  {
    _id: new ObjectID(),
    text: 'Second test todo'
  }
]

const populateTodos = done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos)
    })
    .then(() => done())
}



module.exports = {
  users,
  populateUsers,
  todos,
  populateTodos
}
