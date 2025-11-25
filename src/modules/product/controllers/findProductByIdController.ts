import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { toProductResponse } from '../mapper/productMapper'
import { makeFindProductByIdService } from '../services/factory/makeFindProductByIdService'

export async function findProductByIdController(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const paramsSchema = z.object({
			id: z.number({ message: 'O id precisa ser um número válido' }),
		})

		const { id } = paramsSchema.parse(request.params)

		const findProductByIdService = makeFindProductByIdService()

		const product = await findProductByIdService.execute(id)

		const productResponse = toProductResponse(product)

		return response.status(200).json(productResponse)
	} catch (error) {
		next(error)
	}
}
