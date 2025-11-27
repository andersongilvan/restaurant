import { ProductResponse } from '../../product/DTO/ProductResponse'
import { TableResponse } from '../../table/DTO/TableResponse'
import { TabbleSesseionResponse } from '../../tableSession/DTO/TabbleSesseionResponse'
import { CreateOrderRequest } from '../DTO/CreateOderRequest'
import { OrderResponse } from '../DTO/OrderResponse'
import type { Orders } from '../entity/Orders'

export class OrdersMapper {
	public static toOrderRequest(
		tableSessionId: number,
		productId: number,
		quantity: number,
	) {
		return new CreateOrderRequest(tableSessionId, productId, quantity)
	}

	public static toOrderResponse(order: Orders) {
		const productResponse = new ProductResponse(
			order.product.id,
			order.product.name,
			order.product.description,
			order.product.imgUrl,
			order.product.price,
		)

		const tableResponse = new TableResponse(
			order.tableSession.table.id,
			order.tableSession.table.tableNumber,
		)

		const tableSessionResponse = new TabbleSesseionResponse(
			order.tableSession.id,
			order.tableSession.openAt,
			order.tableSession.closedAt,
			tableResponse,
		)

		const orderResponse = new OrderResponse(
			order.id,
			tableSessionResponse,
			productResponse,
			order.quantity,
			order.price,
			order.createtedAt,
			order.updatedTt,
		)

		return orderResponse
	}
}
