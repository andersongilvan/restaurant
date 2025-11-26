import { Router } from 'express'
import { findAllTablesController } from '../modules/table/controller/findAllTablesController'
import { registerTableController } from '../modules/table/controller/registerTableController'

const tableRoutes = Router()

tableRoutes.post('/', registerTableController)
tableRoutes.get('/', findAllTablesController)

export { tableRoutes }
