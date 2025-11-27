import AppDataSource from '../../../../data-source'
import { Product } from '../../../product/entity/Product'
import { PostgresProductRepository } from '../../../product/repository/postgresRepository/PortgresProductRepository'
import { TableSession } from '../../../tableSession/entity/TableSession'
import { TableSessionRepository } from '../../../tableSession/repository/TableSessionRepository'
import { Orders } from '../../entity/Orders'
import { OrderRepository } from '../../repository/OrderRepository'
import { RegisterOrderService } from '../RegisterOrderService'

export class MakeOrderService {
	private static orderRepository = new OrderRepository(
		AppDataSource.getRepository(Orders),
	)

	private static tableSessionrepository = new TableSessionRepository(
		AppDataSource.getRepository(TableSession),
	)

	private static productRepository = new PostgresProductRepository(
		AppDataSource.getRepository(Product),
	)

	public static makeRegisterOrderService() {
		return new RegisterOrderService(
			MakeOrderService.orderRepository,
			MakeOrderService.tableSessionrepository,
			MakeOrderService.productRepository,
		)
	}
}
