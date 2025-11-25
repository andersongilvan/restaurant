import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { toProductResponse } from '../mapper/productMapper'
import { makeFindAllProductsService } from '../services/factory/makeFindAllProductsService'

export async function findAllProductsController(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const queryParams = z.object({
			name: z.string().optional(),
		})

		const { name } = queryParams.parse(request.query)

		console.log(name)

		const findAllProductsController = makeFindAllProductsService()

		const productList = await findAllProductsController.execute(name)

		const productsResponse = productList.map((product) =>
			toProductResponse(product),
		)

		return response.status(200).json(productsResponse)
	} catch (error) {
		next(error)
	}
}
