import type { Request, Response } from 'express'
import z from 'zod'
import { TableSessionMapper } from '../mapper/TableSessionMapper'
import { MakeTableSessionService } from '../services/factory/MakeTableSessionService'

export class CloseTableSessionControler {
	public async handler(request: Request, response: Response) {
		const idTableSessionSchema = z.object({
			id: z.coerce.number({ message: 'O id precisa ser um número válido' }),
		})

		const { id } = idTableSessionSchema.parse(request.params)

		const closeTableSessionService =
			MakeTableSessionService.makeCloseTableSessionService()

		const sessionTableClosed = await closeTableSessionService.execute(id)

		return response
			.status(200)
			.json(TableSessionMapper.toTableSessionResponse(sessionTableClosed))
	}
}
