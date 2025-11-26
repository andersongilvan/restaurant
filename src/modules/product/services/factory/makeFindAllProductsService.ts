import { productTypeOrmRepository } from '../../../../lib/typeOrm'

import { PostgresProductRepository } from '../../repository/postgresRepository/PortgresProductRepository'
import { FindAllProductsService } from '../FindAllProductsService'

export function makeFindAllProductsService() {
	const postgresProductRepository = new PostgresProductRepository(
		productTypeOrmRepository,
	)

	return new FindAllProductsService(postgresProductRepository)
}
