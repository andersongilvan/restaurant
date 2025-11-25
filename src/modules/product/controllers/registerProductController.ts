import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { toProduct } from '../mapper/productMapper'
import { makeRegisterProductService } from '../services/factory/makeRegisterProductService'

export async function registerProductController(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const requestSchema = z.object({
			name: z.string().nonempty({ message: 'Campo obrigatório' }),
			description: z.string().nonempty({ message: 'Campo obrigatório' }),
			imgUrl: z.string().nonempty({ message: 'Campo obrigatório' }),
			price: z
				.number()
				.nonnegative({ message: 'O valor precisa ser maior que zero' }),
		})

		const { name, description, imgUrl, price } = requestSchema.parse(
			request.body,
		)

		const product = toProduct({ name, description, imgUrl, price })

		const registerProductController = makeRegisterProductService()

		const result = await registerProductController.execute(product)

		return response.status(201).json(result)
	} catch (error) {
		next(error)
	}
}
