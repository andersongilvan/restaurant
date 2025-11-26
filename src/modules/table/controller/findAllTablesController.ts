import { Request, Response } from 'express'
import { makeFindAllTablesService } from '../services/fatory/makeFindAllTablesService'

export async function findAllTablesController(
	_request: Request,
	response: Response,
) {
	const findATablesService = makeFindAllTablesService()

	const allTables = await findATablesService.execute()

	return response.status(200).json(allTables)
}
