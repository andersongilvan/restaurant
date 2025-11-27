import type { Request, Response } from 'express'
import z from 'zod'
import { TableSessionMapper } from '../mapper/TableSessionMapper'
import { MakeTableSessionService } from '../services/factory/MakeTableSessionService'

export class FindTableSessionByIdController {
	public async handler(request: Request, response: Response) {
		const findTableSessionByIdSchema = z.object({
			id: z.coerce.number({
				message: 'O id precisa ser um número válido',
			}),
		})

		const { id } = findTableSessionByIdSchema.parse(request.params)

		const findTableInSessionById =
			MakeTableSessionService.makeFindTableSessionByIdService()

		const tableSession = await findTableInSessionById.execute(id)

		return response
			.status(200)
			.json(TableSessionMapper.toTableSessionResponse(tableSession))
	}
}
