import {Router} from 'express';
import { Metodo as tareasController } from '../controllers/tareas.controller.js';

const router = Router();

router.get('/tareas', tareasController.getAllTareas);

router.post('/tareas', tareasController.postAgregrarTareas);

router.put('/tareas/:id', tareasController.putModificarTareas);

router.delete('/tareas/:id', tareasController.deleteTareas);

router.get('/tareas/:id', tareasController.getTareaById);

export default router;