import type { Request, Response } from 'express'
import { TableSessionMapper } from '../mapper/TableSessionMapper'
import { MakeTableSessionService } from '../services/factory/MakeTableSessionService'

export class FindAllTablesSessionController {
	public async handler(_request: Request, response: Response) {
		const findAllTablesSessionService =
			MakeTableSessionService.makeFindAllTablesSessionService()

		const allTablesSessions = await findAllTablesSessionService.execute()

		const allTablesSessionsResponse = allTablesSessions.map((tableSession) => {
			return TableSessionMapper.toTableSessionResponse(tableSession)
		})

		return response.status(200).json(allTablesSessionsResponse)
	}
}
