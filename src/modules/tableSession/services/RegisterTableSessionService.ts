import { ResourceAlreadyExistError } from '../../../exceptions/ResourceAlreadyExistError'
import { ResourceNotFoundError } from '../../../exceptions/ResourceNotFoundError'
import type { ITableRepository } from '../../table/repository/ITableRepository'
import { TableSession } from '../entity/TableSession'
import type { TableSessionRepository } from '../repository/TableSessionRepository'

interface RegisterTableSessionServiceRequest {
	tableId: number
}

interface RegisterTableSessionServiceResponse {
	tableSession: TableSession
}

export class RegisterTableSessionService {
	constructor(
		private tableSessionRepository: TableSessionRepository,
		private tableRepository: ITableRepository,
	) {}

	async execute({
		tableId,
	}: RegisterTableSessionServiceRequest): Promise<RegisterTableSessionServiceResponse> {
		const table = await this.tableRepository.findById(tableId)

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

		await this.tableSessionRepository.create(tableSessionCrieated)

		return {
			tableSession: tableSessionCrieated,
		}
	}
}
