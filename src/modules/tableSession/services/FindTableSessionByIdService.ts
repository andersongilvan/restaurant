import { ResourceNotFoundError } from '../../../exceptions/ResourceNotFoundError'
import type { ITableSessionRepository } from '../repository/ITableSessionRepository'

export class FindTableSessionByIdService {
	constructor(private tableSessionRepository: ITableSessionRepository) {}

	public async execute(tableSessionId: number) {
		const tableSession =
			await this.tableSessionRepository.findById(tableSessionId)

		if (!tableSession) {
			throw new ResourceNotFoundError('Sessão não encobtrada')
		}

		return tableSession
	}
}
