import type { ProductResponse } from '../../product/DTO/ProductResponse'
import type { TabbleSesseionResponse } from '../../tableSession/DTO/TabbleSesseionResponse'

export class OrderResponse {
	constructor(
		readonly id: number,

		readonly tableSession: TabbleSesseionResponse,

		readonly product: ProductResponse,

		readonly quntity: number,

		readonly price: number,

		readonly createdAt: Date,

		readonly updatedAt: Date,
	) {}
}
