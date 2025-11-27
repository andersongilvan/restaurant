import { Router } from 'express'
import { orderRoutes } from './orderRoutes'
import { productRoutes } from './productRoutes'
import { tableRoutes } from './tableRoutes'
import { tableSessionRoutes } from './tableSessionRoutes'

const routes = Router()

routes.use('/product', productRoutes)
routes.use('/table', tableRoutes)
routes.use('/table-session', tableSessionRoutes)
routes.use('/order', orderRoutes)

export { routes }
