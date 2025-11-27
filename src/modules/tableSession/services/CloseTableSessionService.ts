import { ResourceNotFoundError } from '../../../exceptions/ResourceNotFoundError'
import type { ITableSessionRepository } from '../repository/ITableSessionRepository'

export class CloseTableSessionService {
	constructor(private tableSessionRepository: ITableSessionRepository) {}

	public async execute(tableSessionId: number) {
		const tableSessionExists =
			await this.tableSessionRepository.findById(tableSessionId)

		if (!tableSessionExists) {
			throw new ResourceNotFoundError('Essa sessão não existe')
		}

		if (tableSessionExists.closedAt) {
			throw new ResourceNotFoundError('Essa sessão já esta fechada')
		}

		const tableSession = tableSessionExists

		tableSession.closedAt = new Date()

		return await this.tableSessionRepository.create(tableSession)
	}
}
