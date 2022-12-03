import express from 'express'
import CategoriasController from '../controllers/CategoriasController.js'

const { create, findOne, findAll, remove, update } = CategoriasController

const router = express.Router();

router.get("/categoria/get", findAll);
router.post("/categoria/post", create);
router.put("/categoria/put",update);
router.delete("/categoria/delete:id",remove);
router.get("/categoria/get:id",findOne);

export default router;



