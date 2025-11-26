import { tableTypeOrmRepository } from '../../../../lib/typeOrm'
import { TableRepository } from '../../repository/TableRepository'
import { FindAllTablesService } from '../FindAllTableService'

export function makeFindAllTablesService() {
	const tableRepository = new TableRepository(tableTypeOrmRepository)

	return new FindAllTablesService(tableRepository)
}
