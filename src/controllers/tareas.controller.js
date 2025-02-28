import { pool } from '../database/db.js';

//Metodo POST
const postAgregrarTareas = async (req, res, next) => {
    const { titulo, descripccion } = req.body

    try {
        if (!titulo || !descripccion) {
            return res.status(400).send('Faltan datos')
        }
        const result = await pool.query('INSERT INTO tareas (titulo, descripccion) VALUES ($1,$2) RETURNING *', [titulo, descripccion])
        //enviar la respuesta
        return res.status(200).json(result.rows[0]);
    } catch (error) {
        next(error)
    }

};

//Metodo Get
const getAllTareas = async (req, res, next) => {
    try {
        const resul = await pool.query('SELECT * FROM tareas');
        res.json(resul.rows);
    } catch (error) {
        next(error)
    }
};

//Obtener un dato por ID
const getTareaById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM tareas WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "tarea no encontrada"
            })
        }
        res.json(result.rows);
    } catch (error) {
        next(error)
    }
}

//Metodo PUT
const putModificarTareas = async (req, res, next) => {
    const { id } = req.params;
    const { titulo, descripccion } = req.body;
    try {
        //Verificar que los campos no esten vacios
        if (!titulo || !descripccion) {
            return res.status(400).send('Faltan datos')
        }
        //Se agerga (RETURNING *) al final de la consulta para obtner la fila actualizada
        const result = await pool.query("UPDATE tareas SET titulo = $1, descripccion =$2 WHERE id = $3 RETURNING *", [titulo, descripccion, id])
        //Verificacar si se ecnuentra el id
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "tarea no encontrada"
            })
        }
        //Enviar la respuesta
        res.status(200).json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

//Metodo DELETE
const deleteTareas = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tareas WHERE id =$1', [id])
        //Verificacar si una fila fue modificada con rowCount
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: "tarea no encontrada"
            })
        } else {
            //Enviar la respuesta
            return res.status(204).json({ message: "tarea eliminada" });
        }

    } catch (error) {
        next(error)
    }
};


export const Metodo = {
    getAllTareas,
    postAgregrarTareas,
    putModificarTareas,
    deleteTareas,
    getTareaById
}