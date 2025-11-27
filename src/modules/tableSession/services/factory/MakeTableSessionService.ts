import {
	tableSessionTypeOrmRepository,
	tableTypeOrmRepository,
} from '../../../../lib/typeOrm'
import { TableRepository } from '../../../table/repository/TableRepository'
import { TableSessionRepository } from '../../repository/TableSessionRepository'
import { RegisterTableSessionService } from '../RegisterTableSessionService'

export class MakeTableSessionService {
	public static makeRegisterTableSessionService() {
		const tableSessionRepository = new TableSessionRepository(
			tableSessionTypeOrmRepository,
		)

		const tableRepository = new TableRepository(tableTypeOrmRepository)

		return new RegisterTableSessionService(
			tableSessionRepository,
			tableRepository,
		)
	}
}
