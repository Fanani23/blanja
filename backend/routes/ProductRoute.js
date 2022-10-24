import express from "express";
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import {
  checkCreateProduct,
  checkUpdateProduct,
} from "../middleware/CheckProduct.js";

const router = express.Router();

router.get("/product", getProduct);
router.get("/product/:id", getProductById);
router.post("/product", checkCreateProduct, createProduct);
router.put("/product/:id", checkUpdateProduct, updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
