import type { Request, Response } from 'express'
import z from 'zod'
import { makeRegisterTableSessionService } from '../services/factory/makeRegisterTableSessionService'

export async function registerTableSessionController(
	request: Request,
	response: Response,
) {
	const registerTableSessionSchema = z.object({
		tableId: z.coerce
			.number({ message: 'O número da mesa dever um número válido' })
			.nonnegative({ message: 'O número da mesa ser igual ou maior que zero' }),
	})

	const { tableId } = registerTableSessionSchema.parse(request.body)

	const registerTableSessionService = makeRegisterTableSessionService()

	const newTableSession = await registerTableSessionService.execute({
		tableId,
	})

	return response.status(201).json(newTableSession)
}
