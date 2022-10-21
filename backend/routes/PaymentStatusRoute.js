import express from "express";
import {
  getPaymentStatus,
  getPaymentStatusById,
  createPaymentStatus,
  updatePaymentStatus,
  deletePaymentStatus,
} from "../controllers/PaymentStatusController.js";

const router = express.Router();

router.get("/payment_status", getPaymentStatus);
router.get("/payment_status/:id", getPaymentStatusById);
router.post("/payment_status", createPaymentStatus);
router.put("/payment_status/:id", updatePaymentStatus);
router.delete("/payment_status/:id", deletePaymentStatus);

export default router;
