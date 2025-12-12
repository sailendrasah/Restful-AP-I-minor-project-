import mongoose from "mongoose";
import dotenv from "dotenv";    
dotenv.config();
const connectDb = async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGOL_URL).then(() => {
          console.log("Database connected successfully");
        });
    } catch (error) {
        console.log("Database connection failed", error);
    }
}
export default connectDb;