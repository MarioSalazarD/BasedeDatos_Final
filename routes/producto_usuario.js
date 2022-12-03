import express from 'express'
import ProductosController from '../controllers/ProductosController.js'

const { create, findOne, findAll, remove, update } = ProductosController

const router = express.Router();

router.get("/Productos/get", findAll);
router.post("/Productos/post", create);
router.put("/Productos/put",update);
router.delete("/Productos/delete:id",remove);
router.get("/Productos/get:id",findOne);

export default router;