import express, {Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser = require('body-parser')

const app: Application = express()

app.use(cors())
app.use(bodyParser)