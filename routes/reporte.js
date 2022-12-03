import express from 'express'
import ReporteController from '../controllers/ReporteController.js'

const { create, findOne, findAll, remove, update } = ReporteController

const router = express.Router();

router.get("/reporte/get", findAll);
router.post("/reporte/post", create);
router.put("/reporte/put",update);
router.delete("/reporte/delete:id",remove);
router.get("/reporte/get:id",findOne);

export default router;s