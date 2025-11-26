import AppDataSource from '../data-source'
import { Product } from '../modules/product/entity/Product'
import { Table } from '../modules/table/entity/Table'
import { TableSession } from '../modules/tableSession/entity/TableSession'

export const productTypeOrmRepository = AppDataSource.getRepository(Product)

export const tableTypeOrmRepository = AppDataSource.getRepository(Table)

export const tableSessionTypeOrmRepository =
	AppDataSource.getRepository(TableSession)
