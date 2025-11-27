import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Product } from '../../product/entity/Product'
import { TableSession } from '../../tableSession/entity/TableSession'

@Entity({ name: 'orders' })
export class Orders {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(
		() => TableSession,
		(tableSession) => tableSession.orders,
	)
	@JoinColumn({ name: 'table_session_id' })
	tableSession: TableSession

	@ManyToOne(
		() => Product,
		(product) => product.orders,
	)
	@JoinColumn({ name: 'product_id' })
	product: Product

	@Column({ type: 'int', nullable: false })
	quantity: number

	@Column({ name: 'price', type: 'decimal' })
	price: number

	@CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	createtedAt: Date

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
	updatedTt: Date
}
