import { TableResponse } from '../../table/DTO/TableResponse'
import { TabbleSesseionResponse } from '../DTO/TabbleSesseionResponse'
import { TableSessionRequest } from '../DTO/TableSessionRequest'
import type { TableSession } from '../entity/TableSession'

export class TableSessionMapper {
	public static toTableSessionResponse(tableSession: TableSession) {
		return new TabbleSesseionResponse(
			tableSession.id,
			tableSession.openAt,
			tableSession.closedAt,
			new TableResponse(tableSession.table.id, tableSession.table.tableNumber),
		)
	}

	public static toTableSessionRequest(tableId: number) {
		return new TableSessionRequest(tableId)
	}
}
