import { Router } from 'express'
import { CloseTableSessionControler } from '../modules/tableSession/controllers/CloseTableSessionControler'
import { FindAllTablesSessionController } from '../modules/tableSession/controllers/FindAllTablesSessionController'
import { FindTableSessionByIdController } from '../modules/tableSession/controllers/FindTableSessionByIdController'
import { RegisterTableSessionController } from '../modules/tableSession/controllers/RegisterTableSessionController'

const tableSessionRoutes = Router()

tableSessionRoutes.post('/', new RegisterTableSessionController().handler)
tableSessionRoutes.get('/:id', new FindTableSessionByIdController().handler)
tableSessionRoutes.get('/', new FindAllTablesSessionController().handler)
tableSessionRoutes.put('/:id', new CloseTableSessionControler().handler)

export { tableSessionRoutes }
