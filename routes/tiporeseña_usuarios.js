import express from 'express'
import TipoReseñasController from '../controllers/TipoReseñasController.js'

const { create, findOne, findAll, remove, update } = TipoReseñasController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;