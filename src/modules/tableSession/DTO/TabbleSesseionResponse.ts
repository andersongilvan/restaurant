import type { TableResponse } from '../../table/DTO/TableResponse'

export class TabbleSesseionResponse {
	private id: number
	private openAt: Date
	private closedAt: Date | null
	private table: TableResponse

	constructor(
		id: number,
		openAt: Date,
		closedAt: Date | null,
		table: TableResponse,
	) {
		this.id = id
		this.openAt = openAt
		this.closedAt = closedAt
		this.table = table
	}

	// GETTERS
	public getId(): number {
		return this.id
	}

	public getOpenAt(): Date {
		return this.openAt
	}

	public getClosedAt(): Date | null {
		return this.closedAt
	}

	public getTable(): TableResponse {
		return this.table
	}

	// SETTERS
	public setId(id: number): void {
		this.id = id
	}

	public setOpenAt(openAt: Date): void {
		this.openAt = openAt
	}

	public setClosedAt(closedAt: Date | null): void {
		this.closedAt = closedAt
	}

	public setTable(table: TableResponse): void {
		this.table = table
	}
}
