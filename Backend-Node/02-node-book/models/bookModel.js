import mongoose from "mongoose";

const bookSchema =mongoose.Schema({
    title:{type:String, require:true},
    price:{type:String, require:true},
    image:{type:String, require:true}
})

const bookModel = mongoose.model(`product`, bookSchema)

export default bookModel





// import mongoose from "mongoose";

// const productShcema =mongoose.Schema({
//     title:{type:String, require:true},
//     price:{type:String, require:true},
//     image:{type:String, require:true}
// }, {timestamps:true})

// const ProductModel =mongoose.model('product', productShcema)

// export default ProductModel
