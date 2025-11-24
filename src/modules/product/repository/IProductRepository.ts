import type { Product } from '../entity/Product'

export interface IProductRepository {
	create(data: Product): Promise<Product>
	findById(id: number): Promise<Product | null>
	findAll(name?: string): Promise<Product[]>
	findByname(name: string): Promise<Product | null>
	update(data: Product): Promise<Product>
	delele(idProduct: number): Promise<void>
}
