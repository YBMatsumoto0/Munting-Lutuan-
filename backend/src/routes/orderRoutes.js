import express from "express";
import { getOrders, updateOrderStatus, deleteOrder,addOrder } from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getOrders);
router.put("/:orderId", updateOrderStatus);
router.delete("/:orderId", deleteOrder);
router.post("/", addOrder);

export default router;
