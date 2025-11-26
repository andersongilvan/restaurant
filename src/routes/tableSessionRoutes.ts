import { Router } from 'express'
import { registerTableSessionController } from '../modules/tableSession/controllers/registerTableSessionController'

const tableSessionRoutes = Router()

tableSessionRoutes.post('/', registerTableSessionController)

export { tableSessionRoutes }
