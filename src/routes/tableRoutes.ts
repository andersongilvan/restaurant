import { Router } from 'express'
import { registerTableController } from '../modules/table/controller/registerTableController'
import { findAllTablesController } from '../modules/table/controller/findAllTablesController'

const tableRoutes = Router()

tableRoutes.post('/', registerTableController)
tableRoutes.get('/', findAllTablesController)

export { tableRoutes }
