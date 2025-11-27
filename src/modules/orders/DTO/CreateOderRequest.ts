export class CreateOrderRequest {
	constructor(
		readonly tableSessionId: number,
		readonly productId: number,
		readonly quantity: number,
	) {}
}
