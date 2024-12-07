import express from "express"
import { getAllPlants, getPlantById} from "../controllers/plant.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js"
import { checkAuth } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/",protectRoute,getAllPlants)
router.get('/:plantId', getPlantById); // Fetch a specific plant by its 'id'
export default router;