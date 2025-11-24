export class ProductResponse {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly description: string,
		readonly imgUrl: string,
		readonly price: number,
	) {}
}
