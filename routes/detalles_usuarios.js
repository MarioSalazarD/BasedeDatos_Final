import express from 'express'
import Detalles_UsuariosController from '../controllers/Detalles_UsuariosController.js'

const { create, findOne, findAll, remove, update } = Detalles_UsuariosController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;