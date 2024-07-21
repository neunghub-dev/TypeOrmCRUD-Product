import { AppDataSource } from '../data-source';
import { Product } from '../entitys/product.entity';
import { ProductCreateDto } from '../dto/products/create.dto';
import { ProductUpdateDto } from '../dto/products/update.dto';

const productService = {
    async getAll() {
        return await AppDataSource.getRepository(Product).find();
    },
    async getById(id: number) {
        return await AppDataSource.getRepository(Product).findOne({
            where: { id },
        });
    },
    async create(product: ProductCreateDto) {
        return await AppDataSource.getRepository(Product).save(product);
    },
    async update(id: number, product: ProductUpdateDto) {
        return await AppDataSource.getRepository(Product).update(id, product);
    },
    async delete(id: number) {
        return await AppDataSource.getRepository(Product).delete(id);
    },
};

export default productService;