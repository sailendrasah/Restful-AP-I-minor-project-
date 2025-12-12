import mongoose from "mongoose"
const complainSchema=new mongoose.Schema({
    userId:{    
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },  
    subject:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },  
    status:{
        type:String,
        enum:['open','in progress','resolved'],
        default:'open'
    },
},{timestamps:true}
);

    const Complaint=mongoose.model('Complaint',complainSchema);
    export default Complaint;