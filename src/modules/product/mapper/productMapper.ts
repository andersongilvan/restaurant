import { ProductResponse } from '../DTO/ProductResponse'
import type { RegisterProductRequest } from '../DTO/RegisterProductRequest'
import { Product } from '../entity/Product'

export function toProduct(request: RegisterProductRequest) {
	return new Product(
		request.name,
		request.description,
		request.description,
		request.price,
	)
}

export function toProductResponse(product: Product) {
	return new ProductResponse(
		product.id,
		product.name,
		product.description,
		product.imgUrl,
		product.price,
	)
}
