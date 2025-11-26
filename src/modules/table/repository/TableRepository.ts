import { Repository } from 'typeorm'
import { Table } from '../entity/Table'
import { ITableRepository } from './ITableRepository'

export class TableRepository implements ITableRepository {
	constructor(private db: Repository<Table>) {}

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
