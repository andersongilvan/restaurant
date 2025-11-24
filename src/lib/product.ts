import AppDataSource from '../data-source'
import { Product } from '../modules/product/entity/Product'

export const product = AppDataSource.getRepository(Product)
