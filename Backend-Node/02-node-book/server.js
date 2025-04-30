import express, { urlencoded } from 'express'
import { connectDB } from './config/config.js'
import ProductRouter from './router/bookRouter.js'
import cors from 'cors'

const app =express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors('*'))

app.use('/api/products', ProductRouter)

connectDB()



// let arr =["data", "data1","data2"]

// app.get('/', (req,res)=>{
//     res.json(arr)
// })

app.listen(5000, ()=>{
    console.log("backend is running!")

})