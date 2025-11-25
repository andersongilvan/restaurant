import { ILike, type Repository } from 'typeorm'
import type { Product } from '../../entity/Product'
import type { IProductRepository } from '../IProductRepository'

export class PostgresProductRepository implements IProductRepository {
	constructor(private db: Repository<Product>) {}

	async findAll(name?: string): Promise<Product[]> {
		if (name) {
			return await this.db.find({
				where: {
					name: ILike(`%${name}%`),
				},
			})
		}

		return await this.db.find()
	}

	async create(data: Product): Promise<Product> {
		return await this.db.save(data)
	}

	async findById(id: number): Promise<Product | null> {
		const product = await this.db.findOne({
			where: { id },
		})

		if (!product) return null

		return product
	}

	async findByname(name: string): Promise<Product | null> {
		const product = await this.db.findOne({
			where: { name },
		})

		if (!product) return null

		return product
	}

	async update(data: Product): Promise<Product> {
		return await this.db.save(data)
	}

	async delele(idProduct: number): Promise<void> {
		await this.db.delete(idProduct)
	}
}
