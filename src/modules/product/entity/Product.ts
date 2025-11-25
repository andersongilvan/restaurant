import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
