import type { TableSession } from '../entity/TableSession'

export interface ITableSessionRepository {
	create(tableSession: TableSession): Promise<TableSession>
	findTableInSessionById(tableId: number): Promise<TableSession | null>
	findById(sessionId: number): Promise<TableSession | null>
	findAll(): Promise<TableSession[]>
}
