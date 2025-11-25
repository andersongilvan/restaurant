import { ResourceNotFoundError } from '../../../exceptions/ResourceNotFoundError'
import type { IProductRepository } from '../repository/IProductRepository'

export class FindProductByIdService {
	constructor(private productRepository: IProductRepository) {}

	async execute(idProduct: number) {
		const product = await this.productRepository.findById(idProduct)

		if (!product) {
			throw new ResourceNotFoundError('Produto não encontrado')
		}

		return product
	}
}
