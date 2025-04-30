import express from 'express'
import { getProducts, postProducts } from '../controllers/productController.js'

const router = express.Router()

router
.get('/products', getProducts)
.post('/products',postProducts )


export default router