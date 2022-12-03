import express from 'express'
import OrdenesController from '../controllers/OrdenesController.js'

const { create, findOne, findAll, remove, update } = OrdenesController

const router = express.Router();

router.get("/Ordenes/get", findAll);
router.post("/Ordenes/post", create);
router.put("/Ordenes/put",update);
router.delete("/Ordenes/delete:id",remove);
router.get("/Ordenes/get:id",findOne);

export default router;