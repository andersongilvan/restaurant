export class RegisterProductRequest {
	constructor(
		readonly name: string,
		readonly description: string,
		readonly imgUrl: string,
		readonly price: number,
	) {}
}
