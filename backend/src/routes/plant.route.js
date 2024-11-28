import express from "express"
import { getAllPlants} from "../controllers/plant.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js"
const router = express.Router();

router.get("/",getAllPlants)

export default router;