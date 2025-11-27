import type { Repository } from 'typeorm'
import type { Orders } from '../entity/Orders'
import type { IOrderRepositoy } from './IOrderRepository'

export class OrderRepository implements IOrderRepositoy {
	constructor(private db: Repository<Orders>) {}

	public async create(order: Orders): Promise<Orders> {
		return await this.db.save(order)
	}
}
