import express from 'express'
import OrdenProductosController from '../controllers/OrdenProductosController.js'

const { create, findOne, findAll, remove, update } = OrdenProductosController

const router = express.Router();

router.get("/OrdenProductos/get", findAll);
router.post("/OrdenProductos/post", create);
router.put("/OrdenProductos/put",update);
router.delete("/OrdenProductos/delete:id",remove);
router.get("/OrdenProductos/get:id",findOne);
export default router;