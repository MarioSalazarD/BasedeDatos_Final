import express from 'express'
import ReseñaController from '../controllers/ReseñaController.js'

const { create, findOne, findAll, remove, update } = ReseñaController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;