import type { ITableSessionRepository } from '../repository/ITableSessionRepository'

export class FindAllTablesSessionService {
	constructor(private tableSessionrepository: ITableSessionRepository) {}

	public async execute() {
		return await this.tableSessionrepository.findAll()
	}
}
