import type { Request, Response } from 'express'
import z from 'zod'
import { TableSessionMapper } from '../mapper/TableSessionMapper'
import { MakeTableSessionService } from '../services/factory/MakeTableSessionService'

export class RegisterTableSessionController {
	public async handler(request: Request, response: Response) {
		const registerTableSessionSchema = z.object({
			tableId: z.coerce
				.number({ message: 'O número da mesa dever um número válido' })
				.nonnegative({
					message: 'O número da mesa ser igual ou maior que zero',
				}),
		})

		const registerTableSessionService =
			MakeTableSessionService.makeRegisterTableSessionService()

		const { tableId } = registerTableSessionSchema.parse(request.body)

		const tableSessionRequest =
			TableSessionMapper.toTableSessionRequest(tableId)

		const result =
			await registerTableSessionService.execute(tableSessionRequest)

		return response
			.status(201)
			.json(TableSessionMapper.toTableSessionResponse(result))
	}
}
