import express, { Express } from 'express';
import { routes } from './routes/routes';
import cors from 'cors';

import { cid } from './middleware/cid.middleware';
import { log } from './middleware/log.middleware';

import { errorHandling } from './middleware/error_handling.middleware';

const app: Express = express();

app.use(cid);

app.use(cors());

app.use(log)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandling)

app.use(routes);

// Testar a conexão
import { database } from './database/database';

(async () => {
    console.log(await database.query('select now() as data_atual', []));
})();

export { app };