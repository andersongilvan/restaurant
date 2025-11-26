import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'tbles' })
export class Table {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ name: 'table_number', type: 'int', nullable: false })
	tableNumber: number

	constructor(tableNumber: number) {
		this.tableNumber = tableNumber
	}
}
