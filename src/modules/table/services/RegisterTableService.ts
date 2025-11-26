import { ResourceAlreadyExistError } from '../../../exceptions/ResourceAlreadyExistError'
import { Table } from '../entity/Table'
import { ITableRepository } from '../repository/ITableRepository'

interface RegisterTableServiceRequest {
	tableNumber: number
}

interface RegisterTableServiceRresponse {
	table: Table
}

export class RegisterTableService {
	constructor(private repository: ITableRepository) {}

	async execute({
		tableNumber,
	}: RegisterTableServiceRequest): Promise<RegisterTableServiceRresponse> {
		const tableWhithNumberDuplicated =
			await this.repository.findByNumber(tableNumber)

		if (tableWhithNumberDuplicated) {
			throw new ResourceAlreadyExistError('Mesa já cadastrada')
		}

		const table = new Table(tableNumber)

		await this.repository.create(table)

		return {
			table,
		}
	}
}
