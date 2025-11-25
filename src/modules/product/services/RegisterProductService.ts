import { ResourceAlreadyExistError } from '../../../exceptions/ResourceAlreadyExistError'
import type { Product } from '../entity/Product'
import type { IProductRepository } from '../repository/IProductRepository'

export class RegisterProductService {
	constructor(private productrepository: IProductRepository) {}

	async execute(product: Product) {
		const produtcWhithNameDuplicated = await this.productrepository.findByname(
			product.name,
		)

		if (produtcWhithNameDuplicated) {
			throw new ResourceAlreadyExistError('Produto ja cadastrado')
		}

		return await this.productrepository.create(product)
	}
}
