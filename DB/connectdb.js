import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const DB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("connection sucessful...");
            
        });
    } catch (error) {
        console.log("error from DB"); 
    }
}

export default DB;