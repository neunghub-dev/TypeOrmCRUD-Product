import express from "express";
import { Request, Response } from "express";
const router = express.Router();

import productController from "../controllers/product.controller";

router.get("/product", productController.getAll);
router.get("/product/:id", productController.getById);
router.post("/product", productController.createProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

export default router;