import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Boss',
    email: 'boss@example.com',
    password: bcrypt.hashSync('boss123', 10),
    isAdmin: true
  },
  {
    name: 'Mimi',
    email: 'mimi@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Lili',
    email: 'lili@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Kiki',
    email: 'kiki@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Hippo',
    email: 'hippo@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Pesho',
    email: 'pesho@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Gosho',
    email: 'gosho@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  }
]
