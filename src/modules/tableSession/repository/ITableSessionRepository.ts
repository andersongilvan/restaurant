import type { TableSession } from '../entity/TableSession'

export interface ITableSessionRepository {
	create(tableSession: TableSession): Promise<TableSession>
	findTableInSessionById(tableNumber: number): Promise<TableSession | null>
}
