export class TableSessionRequest {
	private tableId: number

	constructor(tableId: number) {
		this.tableId = tableId
	}

	public setTableId(tableId: number) {
		this.tableId = tableId
	}

	public getTableId() {
		return this.tableId
	}
}
