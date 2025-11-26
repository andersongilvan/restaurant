import { Table } from '../entity/Table'

export interface ITableRepository {
	create(table: Table): Promise<Table>
	findByNumber(tableNumber: number): Promise<Table | null>
    findAll() : Promise<Table[]>
}
