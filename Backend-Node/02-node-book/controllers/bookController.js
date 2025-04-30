
import bookModel from "../models/bookModel.js";


const getBook = async (req, res)=>{
    const books = await bookModel.find()
    res.json(books)
}

const postBook = async (req,res)=>{
    const {title, price, image}= req.body
    console.log(req.body)


    const book = {title, price, image}
    await bookModel.create(book)
}

export {getBook, postBook}



// import ProductModel from '../models/productModel.js'

// const getProducts = async (req, res)=>{
//     const products = await ProductModel.find()
//     res.json(products)
// }

// const postProducts = async (req, res)=>{
//     const {title, price, image} = req.body
//     console.log(req.body)
    

//     const product = {title, price, image}
//     await ProductModel.create(product)
// }

// export {getProducts, postProducts}
