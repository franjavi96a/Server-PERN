import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const middleware = express();

//Middleware
middleware.use(cors());
middleware.use(morgan('dev'));
middleware.use(express.json());

export default middleware;