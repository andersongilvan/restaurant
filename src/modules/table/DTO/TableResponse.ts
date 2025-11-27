export class TableResponse {
	private id: number
	private tableNumber: number

	constructor(id: number, tableNumber: number) {
		this.id = id
		this.tableNumber = tableNumber
	}

	// GETTERS
	public getId(): number {
		return this.id
	}

	public getTableNumber(): number {
		return this.tableNumber
	}

	// SETTERS
	public setId(id: number): void {
		this.id = id
	}

	public setTableNumber(tableNumber: number): void {
		this.tableNumber = tableNumber
	}
}
