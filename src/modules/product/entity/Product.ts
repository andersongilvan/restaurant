import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Orders } from '../../orders/entity/Orders'

@Entity({ name: 'products' })
export class Product {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ name: 'name', type: 'text', nullable: false })
	name: string

	@Column({ name: 'description', type: 'text', nullable: false })
	description: string

	@Column({ name: 'img_url', type: 'text', nullable: false })
	imgUrl: string

	@Column({ type: 'decimal', nullable: false })
	price: number

	@OneToMany(
		() => Orders,
		(orders) => orders.product,
	)
	orders!: Orders[]

	constructor(
		name: string,
		description: string,
		imgUrl: string,
		price: number,
	) {
		this.name = name
		this.description = description
		this.imgUrl = imgUrl
		this.price = price
	}
}
