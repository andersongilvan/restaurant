import type { Request, Response } from 'express'
import z from 'zod'
import { OrdersMapper } from '../mapper/OrdersMapper'
import { MakeOrderService } from '../services/factory/MakeOrderService'

export class RegisterOrderController {
	public async handler(request: Request, response: Response) {
		const createOrderSchema = z.object({
			tableSessionId: z.coerce.number({ message: 'Campo obrigatório' }),
			productId: z.coerce.number({ message: 'Campo obrigatório' }),
			quantity: z.coerce.number({ message: 'Campo obrigatório' }),
		})

		const { productId, quantity, tableSessionId } = createOrderSchema.parse(
			request.body,
		)

		const registerOrdersService = MakeOrderService.makeRegisterOrderService()

		const newOrder = await registerOrdersService.execute(
			OrdersMapper.toOrderRequest(tableSessionId, productId, quantity),
		)

		return response.status(201).json(OrdersMapper.toOrderResponse(newOrder))
	}
}
