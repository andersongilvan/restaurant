import type { Orders } from '../entity/Orders'

export interface IOrderRepositoy {
	create(order: Orders): Promise<Orders>
}
