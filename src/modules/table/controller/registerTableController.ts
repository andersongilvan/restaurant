import type { Request, Response } from 'express'
import z, { number } from 'zod'
import { makeRegisterTableService } from '../services/fatory/makeRegisterTableService'

export async function registerTableController(
	request: Request,
	response: Response,
) {
	const registerTableSchema = z.object({
		tableNumber: number({
			message: 'O número da mesa dever um número válido',
		}).nonnegative({
			message: 'O número da mesa ser igual ou maior que zero',
		}),
	})

	const { tableNumber } = registerTableSchema.parse(request.body)

	const registerTableService = makeRegisterTableService()

	const newTable = await registerTableService.execute({ tableNumber })

	return response.status(201).json(newTable)
}
