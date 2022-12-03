import express from 'express'
import OrdenesController from '../controllers/OrdenesController.js'

const { create, findOne, findAll, remove, update } = OrdenesController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;