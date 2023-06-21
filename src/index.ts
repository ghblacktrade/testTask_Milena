import express, {Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser = require('body-parser')
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

const app: Application = express()

app.use(cors())
app.use(bodyParser.json())

dotenv.config({

    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

// я опишу интерфйес для юсеров прямо тут для удобства проверки, файл будет не большой все равно
// но естественно все в отдельном фале должно быть
interface User {

    id: string
    email: string
    hashedPassword: string
}

//я добавлю массив юсеров здесь по той же причине

const users: User[] = [

    {
      id: uuidv4(),
      email: 'jim@gmail.com',
      hashedPassword: bcrypt.hashSync('221122', 8),
    },
    {
      id: uuidv4(),
      email: 'jam@gmail.com',
      hashedPassword: bcrypt.hashSync('830347', 8),
    }, 
    {
      id: uuidv4(),
      email: 'john@gmail.com',
      hashedPassword: bcrypt.hashSync('221122', 8),
    },
    {
      id: uuidv4(),
      email: 'jams@gmail.com',
      hashedPassword: bcrypt.hashSync('349425', 8),
    },
    {
      id: uuidv4(),
      email: 'jams@gmail.com',
      hashedPassword: bcrypt.hashSync('141424', 8),
    },
    {
      id: uuidv4(),
      email: 'jill@gmail.com',
      hashedPassword: bcrypt.hashSync('822287', 8),
    }
  ]