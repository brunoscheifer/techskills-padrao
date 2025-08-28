import express, { Express, Request, Response, NextFunction } from 'express';
import { routes } from './routes/routes';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { error } from 'console';

const app: Express = express();

const filelog = fs.createWriteStream(path.join(__dirname, 'storage', 'access.log'),{ flags: 'a'});

app.use(morgan('combined', { stream: filelog}));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if(err) {
        return res.status(400).json({
            msg: 'Ocorreu um erro',
            error: err.message
        })
    }
})

app.use(routes);

export { app };