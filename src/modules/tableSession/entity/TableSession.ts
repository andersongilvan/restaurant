import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Orders } from '../../orders/entity/Orders'
import { Table } from '../../table/entity/Table'

@Entity({ name: 'table_session' })
export class TableSession {
	@PrimaryGeneratedColumn({ type: 'int' })
	id!: number

	@CreateDateColumn({ name: 'open_at', type: 'timestamp' })
	openAt!: Date

	@Column({ name: 'closed_at', type: 'timestamp', nullable: true })
	closedAt!: Date

	@OneToOne(
		() => Table,
		(table) => table.session,
	)
	@JoinColumn({ name: 'table_id' })
	table!: Table

	@OneToMany(
		() => Orders,
		(orders) => orders.tableSession,
	)
	orders!: Orders[]
}
