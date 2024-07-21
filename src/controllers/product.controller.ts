// product.controller.ts
import { Request, Response } from 'express';
import productService from '../services/product.service';
import { ProductCreateDto } from '../dto/products/create.dto';
import { ProductUpdateDto } from '../dto/products/update.dto';

const productController = {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const products = await productService.getAll();
            res.status(200).json({
                message: 'Products retrieved successfully',
                data: products,
            });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving products' });
        }
    },

    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const product: ProductCreateDto = req.body;
            const newProduct = await productService.create(product);
            res.status(201).json({
                message: 'Product created successfully',

            });
        } catch (error) {
            res.status(500).json({ message: 'Error creating product' });
        }
    },
    async getById(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.params.id);
            const product = await productService.getById(id);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json({
                message: 'Product retrieved successfully',
                data: product,
            });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving product' });
        }
    },
    async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.params.id);
            const product: ProductUpdateDto = req.body;
            const updatedProduct = await productService.update(id, product);
            res.status(200).json({
                message: 'Product updated successfully',
                data: updatedProduct,
            });
        } catch (error) {
            res.status(500).json({ message: 'Error updating product' });
        }
    },
    async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.params.id);
            await productService.delete(id);
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product' });
        }
    },

    // other methods...
};

export default productController;
