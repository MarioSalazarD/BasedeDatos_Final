import express from 'express'
import UsuariosController from '../controllers/UsuariosController.js'

const { create, findOne, findAll, remove, update,login } = UsuariosController

const router = express.Router();

router.get("/Usuarios/get", findAll);
router.post("/Usuarios/post", create);
router.put("/Usuarios/put",update);
router.delete("/Usuarios/delete/:id",remove);
router.post("/Usuarios/pass",findOne);
router.get('/:correo/:password', login)

export default router;