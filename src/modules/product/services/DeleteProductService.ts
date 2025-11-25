import { ResourceNotFoundError } from '../../../exceptions/ResourceNotFoundError'
import type { IProductRepository } from '../repository/IProductRepository'

export class DeleteProductService {
	constructor(private productRepository: IProductRepository) {}

	async execute(idProduct: number) {
		const productExixts = await this.productRepository.findById(idProduct)

		if (!productExixts) {
			throw new ResourceNotFoundError('Produto não encontrado')
		}

		await this.productRepository.delele(idProduct)
	}
}
