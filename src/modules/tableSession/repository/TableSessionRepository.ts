import type { Repository } from 'typeorm'
import type { TableSession } from '../entity/TableSession'
import type { ITableSessionRepository } from './ITableSessionRepository'

export class TableSessionRepository implements ITableSessionRepository {
	constructor(private db: Repository<TableSession>) {}

	async findTableInSessionById(tableId: number): Promise<TableSession | null> {
		const tableInSession = await this.db.findOne({
			where: {
				table: {
					id: tableId,
				},
			},
		})

		if (!tableInSession) return null

		return tableInSession
	}

	async create(tableSession: TableSession): Promise<TableSession> {
		return await this.db.save(tableSession)
	}
}
