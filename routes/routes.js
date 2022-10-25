import express from "express";
import { isUserAuthenticated } from "../middlewares/auth.js";

// Import Curse Controller
import { //importramos todos los Controller que tenemos 
  getCurses,
  getCurseById,
  createCurse,
  updateCurse,
  deleteCurse
} from "../controllers/curses.js";

const router = express.Router();

// Route get all curses
router.get('/curses', [isUserAuthenticated] ,getCurses); //valida si esta logueado o nop para entrar. (se usa [] si hay varios middleware)
// Route get product by id
router.get('/curses/:id',isUserAuthenticated ,getCurseById);
// Route create a new p
router.post('/curses',isUserAuthenticated ,createCurse);
// Route update product by id
router.put('/curses/:id',isUserAuthenticated ,updateCurse);
// Route delete product by id
router.delete('/curses/:id',isUserAuthenticated ,deleteCurse);

// export router
export default router;