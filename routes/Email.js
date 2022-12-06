import express from 'express'
import EmailController from "../controllers/EmailController.js";
const {sendEmail} = EmailController

const router = express.Router();
router.post("/send", EmailController.sendEmail);

export default router
