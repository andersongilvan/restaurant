import { productTypeOrmRepository } from '../../../../lib/productDataSpurce'
import { PostgresProductRepository } from '../../repository/postgresRepository/PortgresProductRepository'
import { DeleteProductService } from '../DeleteProductService'

export function makeDeleteProductService() {
	const postgresProductRepository = new PostgresProductRepository(
		productTypeOrmRepository,
	)

	return new DeleteProductService(postgresProductRepository)
}
