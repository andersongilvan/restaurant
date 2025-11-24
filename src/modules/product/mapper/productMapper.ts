import { ProductResponse } from '../DTO/ProductResponse'
import type { RegisterProductRequest } from '../DTO/RegisterProductRequest'
import { Product } from '../entity/Product'

export function toProduct(request: RegisterProductRequest) {
	const product = new Product()

	product.name = request.name
	product.description = request.description
	product.imgUrl = request.imgUrl
	product.price = request.price

	return product
}

export function toProductResponse(product: Product) {
	const productResponse = new ProductResponse(
		product.id,
		product.name,
		product.description,
		product.imgUrl,
		product.price,
	)

	return productResponse
}
