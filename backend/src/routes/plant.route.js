import express from "express"
import { getAllPlants, getPlantById} from "../controllers/plant.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js"
const router = express.Router();

router.get("/",getAllPlants)
router.get("/:id",getPlantById)

export default router;