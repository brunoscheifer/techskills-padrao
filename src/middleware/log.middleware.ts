import morgan from 'morgan';
import fs from 'fs';
import path from 'path';



const filelog = fs.createWriteStream(path.join(__dirname, '..', 'storage', 'access.log'),{ flags: 'a'});

export const log = morgan('combined', { stream: filelog});
