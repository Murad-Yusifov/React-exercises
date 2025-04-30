import ProductModel from '../models/productModel.js'

const getProducts = async (req, res)=>{
    const products = await ProductModel.find()
    res.json(products)
}

const postProducts = async (req, res)=>{
    const {title, price, image} = req.body
    console.log(req.body)
    

    const product = {title, price, image}
    await ProductModel.create(product)
}

export {getProducts, postProducts}
