import express from 'express'
import ProductosController from '../controllers/ProductosController.js'

const { create, findOne, findAll, remove, update } = ProductosController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;