import type { Repository } from 'typeorm'
import type { Table } from '../entity/Table'
import type { ITableRepository } from './ITableRepository'

export class TableRepository implements ITableRepository {
	constructor(private db: Repository<Table>) {}

	async findById(idTable: number): Promise<Table | null> {
		const table = await this.db.findOne({
			where: { id: idTable },
		})

		if (!table) return null

		return table
	}

	async findAll(): Promise<Table[]> {
		return await this.db.find()
	}

	async findByNumber(tableNumber: number): Promise<Table | null> {
		const table = await this.db.findOne({
			where: { tableNumber },
		})

		if (!table) return null

		return table
	}

	async create(table: Table): Promise<Table> {
		return await this.db.save(table)
	}
}
