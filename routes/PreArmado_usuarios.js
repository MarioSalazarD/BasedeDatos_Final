import express from 'express'
import PreArmadosController from '../controllers/PreArmadoProductosController.js'

const { create, findOne, findAll, remove, update } = PreArmadosController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;