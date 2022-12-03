import express from 'express'
import CategoriasController from '../controllers/CategoriasController.js'

const { create, findOne, findAll, remove, update } = CategoriasController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;


