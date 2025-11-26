import { productTypeOrmRepository } from '../../../../lib/typeOrm'
import { PostgresProductRepository } from '../../repository/postgresRepository/PortgresProductRepository'
import { RegisterProductService } from '../RegisterProductService'

export function makeRegisterProductService() {
	const productRepository = new PostgresProductRepository(
		productTypeOrmRepository,
	)

	return new RegisterProductService(productRepository)
}
