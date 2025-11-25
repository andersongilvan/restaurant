import { productTypeOrmRepository } from '../../../../lib/productDataSpurce'

import { PostgresProductRepository } from '../../repository/postgresRepository/PortgresProductRepository'
import { FindProductByIdService } from '../FindProductByIdService'

export function makeFindProductByIdService() {
	const productRepository = new PostgresProductRepository(
		productTypeOrmRepository,
	)

	const findProductByIdService = new FindProductByIdService(productRepository)

	return findProductByIdService
}
