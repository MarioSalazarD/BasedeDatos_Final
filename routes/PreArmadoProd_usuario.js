import express from 'express'
import PreArmadoProductosController from '../controllers/PreArmadoProductosController.js'

const { create, findOne, findAll, remove, update } = PreArmadoProductosController

const router = express.Router();

router.get("/PreArmadoProductos/get", findAll);
router.post("/PreArmadoProductos/post", create);
router.put("/PreArmadoProductos/put",update);
router.delete("/PreArmadoProductos/delete:id",remove);
router.get("/PreArmadoProductos/get:id",findOne);

export default router;