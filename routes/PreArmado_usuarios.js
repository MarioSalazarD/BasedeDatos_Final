import express from 'express'
import PreArmadosController from '../controllers/PreArmadoProductosController.js'

const { create, findOne, findAll, remove, update } = PreArmadosController

const router = express.Router();

router.get("/PreArmados/get", findAll);
router.post("/PreArmados/post", create);
router.put("/PreArmados/put",update);
router.delete("/PreArmados/delete:id",remove);
router.get("/PreArmados/get:id",findOne);

export default router;