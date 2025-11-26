import type { Table } from '../entity/Table'
import type { ITableRepository } from '../repository/ITableRepository'

interface FindAllTableServiceRsponse {
	tables: Table[]
}

export class FindAllTablesService {
	constructor(private repository: ITableRepository) {}

	async execute(): Promise<FindAllTableServiceRsponse> {
		const tables = await this.repository.findAll()

		return {
			tables,
		}
	}
}
