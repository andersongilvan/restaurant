import { Router } from 'express'
import { productRoutes } from './productRoutes'
import { tableRoutes } from './tableRoutes'
import { tableSessionRoutes } from './tableSessionRoutes'

const routes = Router()

routes.use('/product', productRoutes)
routes.use('/table', tableRoutes)
routes.use('/table-session', tableSessionRoutes)

export { routes }
