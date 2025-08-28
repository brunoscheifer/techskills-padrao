import express, { Express } from 'express';
import { routes } from './routes/routes';
import morgan from 'morgan';
import fs from 'fs'
import path from 'path'

export const app: Express = express()

const filelog = fs.createWriteStream(path.join(__dirname, 'storage', 'access.log'),{ flags: 'a'});

app.use(morgan('combined', { stream: filelog}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)