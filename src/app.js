import express from 'express';
import middleware from './middleware/middleware.js';
import routerTareas from './routes/tareas.routes.js';

const app = express();

//Middlewares
app.use(middleware);

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

