import express from "express";
import {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/CategoryController.js";
import {
  checkCreateCategory,
  checkUpdateCategory,
} from "../middleware/CheckCategory.js";

const router = express.Router();

router.get("/category", getCategory);
router.get("/category/:id", getCategoryById);
router.post("/category", checkCreateCategory, createCategory);
router.put("/category/:id", checkUpdateCategory, updateCategory);
router.delete("/category/:id", deleteCategory);

export default router;
