import express from "express"
import { postAnOrder, getOrderByEmail,getAllOrders} from "../controllers/order.controller.js";
const router = express.Router();

// create order endpoint

router.post("/create-order",postAnOrder)

// get orders by user email

router.get("/:email",getOrderByEmail)

router.get("/",getAllOrders)

export default router;