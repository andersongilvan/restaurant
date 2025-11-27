import { Router } from 'express'
import { RegisterOrderController } from '../modules/orders/controllers/RegisterOrderController'

const orderRoutes = Router()

orderRoutes.post('/', new RegisterOrderController().handler)

export { orderRoutes }
