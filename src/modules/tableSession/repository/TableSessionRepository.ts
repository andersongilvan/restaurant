import type { Repository } from 'typeorm'
import type { TableSession } from '../entity/TableSession'
import type { ITableSessionRepository } from './ITableSessionRepository'

export class TableSessionRepository implements ITableSessionRepository {
	constructor(private db: Repository<TableSession>) {}

	public async findAll(): Promise<TableSession[]> {
		return await this.db.find({
			relations: ['table'],
			order: {
				openAt: 'DESC',
			},
		})
	}

	public async findById(sessionId: number): Promise<TableSession | null> {
		const table = await this.db.findOne({
			where: { id: sessionId },
			relations: ['table'],
		})

		if (!table) return null

		return table
	}

	public async findTableInSessionById(
		tableId: number,
	): Promise<TableSession | null> {
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

	public async create(tableSession: TableSession): Promise<TableSession> {
		return await this.db.save(tableSession)
	}
}
