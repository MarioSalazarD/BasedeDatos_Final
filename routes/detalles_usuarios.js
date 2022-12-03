import express from 'express'
import Detalles_UsuariosController from '../controllers/Detalles_UsuariosController.js'

const { create, findOne, findAll, remove, update } = Detalles_UsuariosController

const router = express.Router();

router.get("/detalles_usuario/get", findAll);
router.post("/detalles_usuario/post", create);
router.put("/detalles_usuario/put",update);
router.delete("/detalles_usuario/delete:id",remove);
router.get("/detalles_usuario/get:id",findOne);

export default router;