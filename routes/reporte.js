import express from 'express'
import ReporteController from '../controllers/ReporteController.js'

const { create, findOne, findAll, remove, update } = ReporteController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;