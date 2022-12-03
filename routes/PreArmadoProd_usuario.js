import express from 'express'
import PreArmadoProductosController from '../controllers/PreArmadoProductosController.js'

const { create, findOne, findAll, remove, update } = PreArmadoProductosController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;