import { tableTypeOrmRepository } from '../../../../lib/typeOrm'
import { TableRepository } from '../../repository/TableRepository'
import { RegisterTableService } from '../RegisterTableService'

export function makeRegisterTableService() {
	const tableRepository = new TableRepository(tableTypeOrmRepository)

	return new RegisterTableService(tableRepository)
}
