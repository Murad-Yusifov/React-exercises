import express from 'express'
import { getBook, postBook } from '../controllers/bookController.js'
import { postProducts } from '../../01-node-crud/controllers/productController.js'


const router = express.Router()

router.get('/books', getBook)
.post('/books', postProducts)


export default router




// import express from 'express'
// import { getProducts, postProducts } from '../controllers/productController.js'

// const router = express.Router()

// router
// .get('/products', getProducts)
// .post('/products',postProducts )


// export default router