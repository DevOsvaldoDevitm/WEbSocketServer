import { config as configDotenv } from 'dotenv';
import Servidor from './models/server.js';
configDotenv();

const server = new Servidor();
server.listen();
