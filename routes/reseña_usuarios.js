import express from 'express'
import ReseñaController from '../controllers/ReseñaController.js'

const { create, findOne, findAll, remove, update } = ReseñaController

const router = express.Router();

router.get("/Reseña/get", findAll);
router.post("/Reseña/post", create);
router.put("/Reseña/put",update);
router.delete("/Reseña/delete:id",remove);
router.get("/Reseña/get:id",findOne);

export default router;