import mongoose from "mongoose";
import {configDotenv} from 'dotenv'

configDotenv()

export const connectDB =async ()=>{
    try {
        const connect = 
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`database'e qoshuldu
            ${connect.connection.host}`);
        
        
    } catch (error) {
        console.log(error);
        
    }
}
