import pg from 'pg';//por defecto {Pool} viene con CommonJS no con ESM
import config from '../config.js';

//desestructurar el objeto Pool
const { Pool } = pg;
export const pool = new Pool({
    user: config.DB_USER,
    host: config.DB_HOST,
    database: config.DB_DATABASE,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
})