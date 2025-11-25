import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { makeDeleteProductService } from '../services/factory/makeDeleteProductService'

export async function deleteProductController(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const idSchema = z.object({
			id: z.coerce.number({ message: 'ID inválido' }),
		})

		const deleteProductService = makeDeleteProductService()

		const { id } = idSchema.parse(request.params)

		await deleteProductService.execute(id)

		return response.status(204).send()
	} catch (error) {
		next(error)
	}
}
