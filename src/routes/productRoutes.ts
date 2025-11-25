import { Router } from 'express'
import { deleteProductController } from '../modules/product/controllers/deleteProductController'
import { findAllProductsController } from '../modules/product/controllers/findAllProductsController'
import { registerProductController } from '../modules/product/controllers/registerProductController'
import { updateProductController } from '../modules/product/controllers/updateProductController'

const productRoutes = Router()

productRoutes.post('/', registerProductController)
productRoutes.get('/', findAllProductsController)
productRoutes.put('/:id', updateProductController)
productRoutes.delete('/:id', deleteProductController)

export { productRoutes }
