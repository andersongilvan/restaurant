import { ResourceAlreadyExistError } from '../../../exceptions/ResourceAlreadyExistError'
import { ResourceNotFoundError } from '../../../exceptions/ResourceNotFoundError'
import type { ITableRepository } from '../../table/repository/ITableRepository'
import type { TableSessionRequest } from '../DTO/TableSessionRequest'
import { TableSession } from '../entity/TableSession'
import type { TableSessionRepository } from '../repository/TableSessionRepository'

export class RegisterTableSessionService {
	constructor(
		private tableSessionRepository: TableSessionRepository,
		private tableRepository: ITableRepository,
	) {}

	async execute(
		tableSessionRequest: TableSessionRequest,
	): Promise<TableSession> {
		const table = await this.tableRepository.findById(
			tableSessionRequest.getTableId(),
		)

		if (!table) {
			throw new ResourceNotFoundError('Mesa não cadastrada')
		}

		const tableExistsInTableSession =
			await this.tableSessionRepository.findTableInSessionById(table.id)

		if (tableExistsInTableSession) {
			throw new ResourceAlreadyExistError('Mesa em uso')
		}

		const tableSessionCrieated = new TableSession()
		tableSessionCrieated.table = table

		return await this.tableSessionRepository.create(tableSessionCrieated)
	}
}
