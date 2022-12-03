import express from 'express'
import TipoReseñasController from '../controllers/TipoReseñasController.js'

const { create, findOne, findAll, remove, update } = TipoReseñasController

const router = express.Router();

router.get("/TipoReseñas/get", findAll);
router.post("/TipoReseñas/post", create);
router.put("/TipoReseñas/put",update);
router.delete("/TipoReseñas/delete:id",remove);
router.get("/TipoReseñas/get:id",findOne);

export default router;