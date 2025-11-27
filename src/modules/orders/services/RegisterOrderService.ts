import { ResourceNotFoundError } from '../../../exceptions/ResourceNotFoundError'
import type { IProductRepository } from '../../product/repository/IProductRepository'
import type { ITableSessionRepository } from '../../tableSession/repository/ITableSessionRepository'
import type { CreateOrderRequest } from '../DTO/CreateOderRequest'
import { Orders } from '../entity/Orders'
import type { IOrderRepositoy } from '../repository/IOrderRepository'

export class RegisterOrderService {
	constructor(
		private orderRepository: IOrderRepositoy,
		private tableSessionRepository: ITableSessionRepository,
		private productRepository: IProductRepository,
	) {}

	public async execute(orderRequest: CreateOrderRequest) {
		const tableSession = await this.tableSessionRepository.findById(
			orderRequest.tableSessionId,
		)

		if (!tableSession) {
			throw new ResourceNotFoundError('Sessão não iniciada')
		}

		if (tableSession.closedAt) {
			throw new ResourceNotFoundError('Mesa em uso')
		}

		const product = await this.productRepository.findById(
			orderRequest.productId,
		)

		if (!product) {
			throw new ResourceNotFoundError('Produto não encontrado')
		}

		const order = new Orders()

		order.quantity = orderRequest.quantity
		order.price = product.price
		order.tableSession = tableSession
		order.product = product

		return await this.orderRepository.create(order)
	}
}
