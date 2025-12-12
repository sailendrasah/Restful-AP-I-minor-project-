import mongoose from "mongoose";
const helpLineSchema = new mongoose.Schema({
  name: { type: String, 
    required: true
   },
   Number:{
    type: String,
    required: true,
   },
}); 
const Helpline = mongoose.model("Helpline", helpLineSchema);
export default Helpline;