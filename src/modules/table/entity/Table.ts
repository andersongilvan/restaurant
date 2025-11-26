import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { TableSession } from '../../tableSession/entity/TableSession'

@Entity({ name: 'tbles' })
export class Table {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ name: 'table_number', type: 'int', nullable: false })
	tableNumber: number

	@OneToOne(
		() => TableSession,
		(tableSession) => tableSession.table,
	)
	session!: TableSession

	constructor(tableNumber: number) {
		this.tableNumber = tableNumber
	}
}
