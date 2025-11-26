import { Router } from 'express'
import { productRoutes } from './productRoutes'
import { tableRoutes } from './tableRoutes'

const routes = Router()

routes.use('/product', productRoutes)
routes.use('/table', tableRoutes)

export { routes }
