import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Bosik',
    email: 'bosik@bosik.com',
    password: bcrypt.hashSync('bosik123!@#', 10),
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
  },
  {
    name: 'Atanas',
    email: 'atanas@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Ani',
    email: 'ani@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Tani',
    email: 'tani@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Kuku',
    email: 'kuku@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  },
  {
    name: 'Pipi',
    email: 'pipi@gmail.com',
    password: bcrypt.hashSync('123123', 10)
  }
]

export default users
