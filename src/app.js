import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routerTareas from './routes/tareas.routes.js';

const app = express();

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//Rutas
app.use('/api', routerTareas)

//Ruta de bienvenida
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a mi API REST'
    })
})

//Validar rutas
app.use((err, req, res, next) => {
    return res.json({
        message: err.message,
    });
})

export default app

