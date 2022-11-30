import express from 'express'
import UsuariosController from '../controllers/usuariosController.js'

const { create, findOne, findAll, remove, update } = UsuariosController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;