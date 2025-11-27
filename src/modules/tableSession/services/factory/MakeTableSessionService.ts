import AppDataSource from '../../../../data-source'
import { Table } from '../../../table/entity/Table'
import { TableRepository } from '../../../table/repository/TableRepository'
import { TableSession } from '../../entity/TableSession'
import { TableSessionRepository } from '../../repository/TableSessionRepository'
import { CloseTableSessionService } from '../CloseTableSessionService'

import { FindAllTablesSessionService } from '../FindAllTablesSessionService'
import { FindTableSessionByIdService } from '../FindTableSessionByIdService'
import { RegisterTableSessionService } from '../RegisterTableSessionService'

export class MakeTableSessionService {
	private static tableSessionRepository = new TableSessionRepository(
		AppDataSource.getRepository(TableSession),
	)

	private static tableRepository = new TableRepository(
		AppDataSource.getRepository(Table),
	)

	public static makeRegisterTableSessionService() {
		return new RegisterTableSessionService(
			MakeTableSessionService.tableSessionRepository,
			MakeTableSessionService.tableRepository,
		)
	}

	public static makeFindTableSessionByIdService() {
		return new FindTableSessionByIdService(
			MakeTableSessionService.tableSessionRepository,
		)
	}

	public static makeFindAllTablesSessionService() {
		return new FindAllTablesSessionService(
			MakeTableSessionService.tableSessionRepository,
		)
	}

	public static makeCloseTableSessionService() {
		return new CloseTableSessionService(
			MakeTableSessionService.tableSessionRepository,
		)
	}
}
