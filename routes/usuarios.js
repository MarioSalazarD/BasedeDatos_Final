import express from 'express'
import UsuariosController from '../controllers/usuariosController.js'

const { create, findOne, findAll, remove, update } = UsuariosController

const router = express.Router();

router.get("/Usuarios/get", findAll);
router.post("/Usuarios/post", create);
router.put("/Usuarios/put",update);
router.delete("/Usuarios/delete:id",remove);
router.get("/Usuarios/get:id",findOne);

export default router;