import AppDataSource from '../data-source'
import { Product } from '../modules/product/entity/Product'

export const productTypeOrmRepository = AppDataSource.getRepository(Product)
