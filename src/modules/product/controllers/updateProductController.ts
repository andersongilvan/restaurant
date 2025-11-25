import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { toProduct, toProductResponse } from '../mapper/productMapper'
import { makeUpdateProductService } from '../services/factory/makeUpdateProductService'

export async function updateProductController(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const idSchema = z.object({
			id: z.coerce.number({ message: 'ID inválido' }),
		})

		const { id } = idSchema.parse(request.params)

		console.log(id)

		const requestBodySchema = z.object({
			name: z.string().nonempty({ message: 'Campo obrigatório' }),
			description: z.string().nonempty({ message: 'Campo obrigatório' }),
			imgUrl: z.string().nonempty({ message: 'Campo obrigatório' }),
			price: z
				.number()
				.nonnegative({ message: 'O valor precisa ser maior que zero' }),
		})

		const updateProductService = makeUpdateProductService()

		const product = toProduct(requestBodySchema.parse(request.body))

		const productUpdated = await updateProductService.execute(id, product)

		return response.status(200).json(toProductResponse(productUpdated))
	} catch (error) {
		next(error)
	}
}
