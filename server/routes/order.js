import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { getAdminOrders, getMyOrders, getOrderDetails, placeOrder, placeOrderOnline, processOrder } from "../controllers/order.js";
const router = express.Router();

router.post("/createorder", placeOrder) //placeOrder is a handler in controller
router.post("/createorderonline", placeOrderOnline);
router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);


//add admin middleware
router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);
export default router;