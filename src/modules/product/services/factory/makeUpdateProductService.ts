import { productTypeOrmRepository } from '../../../../lib/productDataSpurce'
import { PostgresProductRepository } from '../../repository/postgresRepository/PortgresProductRepository'
import { UpdateProductService } from '../UpdateProductService'

export function makeUpdateProductService() {
	const productRepository = new PostgresProductRepository(
		productTypeOrmRepository,
	)

	return new UpdateProductService(productRepository)
}
