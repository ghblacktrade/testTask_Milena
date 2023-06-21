import express, {Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser = require('body-parser')
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

const app: Application = express()

app.use(cors())
app.use(bodyParser.json())


//тут просто от себя для разных окружений
dotenv.config({

    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

// я опишу интерфйес для юсеров прямо тут для удобства проверки, файл будет небольшой все равно
// но естественно все в отдельном фале должно быть
interface User {

    id: string
    email: string
    hashedPassword: string
    number?: string
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

//здесь получаем этих юсеров

const getUsers = (query: any): User[] => { //пометка для any

    let searchUsers: User[] = []

    if (query.email) {
//вот тут передали и сконкатели
        searchUsers = searchUsers.concat(

            users.filter((user) => user.email === query.email)
        )
    }

    if (query.number) {

        searchUsers = searchUsers.concat(

            users.filter((user) => user.number === query.number)
        )
    }

    return searchUsers
}
//тут запросим
//я бы лучше писал эвейтом, но тут один запрос и ниже можно сделать второй на ошибку, так что просто так
app.get('/users', (req: Request, res: Response) => {

    const searchUsers = getUsers(req.query)

    //тут задержка по заданию
    setTimeout(() => {

        res.status(200).send(searchUsers)
    })
})


const server = app.listen(process.env.PORT || 3000, () => {

    console.log(`Pasha start server`)
  })