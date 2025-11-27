import { Router } from 'express'
import { RegisterTableSessionController } from '../modules/tableSession/controllers/RegisterTableSessionController'

const tableSessionRoutes = Router()

tableSessionRoutes.post('/', new RegisterTableSessionController().handler)

export { tableSessionRoutes }
