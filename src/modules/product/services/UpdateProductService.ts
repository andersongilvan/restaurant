import { ResourceNotFoundError } from '../../../exceptions/ResourceNotFoundError'
import type { Product } from '../entity/Product'
import type { IProductRepository } from '../repository/IProductRepository'

export class UpdateProductService {
	constructor(private productRepository: IProductRepository) {}

	async execute(idProduct: number, productUpdated: Product) {
		const productExixts = await this.productRepository.findById(idProduct)

		if (!productExixts) {
			throw new ResourceNotFoundError('Produto não encontrado')
		}

		productUpdated.id = idProduct

		return this.productRepository.update(productUpdated)
	}
}
