import type { IProductRepository } from '../repository/IProductRepository'

export class FindAllProductsService {
	constructor(private productRepository: IProductRepository) {}

	async execute(name?: string) {
		return this.productRepository.findAll(name)
	}
}
