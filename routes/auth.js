import express from "express";
import { register, login } from "../controllers/auth.js";
 //register viene de ese controlador y loguin de ese otro
 // Init express router
const router = express.Router();

router.post('/auth/login', login);
router.post('/auth/register', register);

// export router
export default router;