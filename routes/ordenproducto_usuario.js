import express from 'express'
import OrdenProductosController from '../controllers/OrdenProductosController.js'

const { create, findOne, findAll, remove, update } = OrdenProductosController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;