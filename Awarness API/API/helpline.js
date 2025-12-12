import dotenv from 'dotenv';
import Helpline from './modal/helpline.js';
import DB from './DB/connectDb.js';
import helplineJson from './helpline.json' assert { type: 'json' };
dotenv.config();

 const db  = async (req, res) => {
    try {
        await DB();
        await Helpline.create(helplineJson);
        console.log("Helpline data imported successfully");
        
    } catch (error) {
        console.log("Error importing helpline data:", error.message);
        
    }
 }
 db();