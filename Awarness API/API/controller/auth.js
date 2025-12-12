import User from "../modal/auth.js";

const registerHandler = async (req, res) => {
    try {
        const { name, email, password } = req.body;  
        if (name == "" || !name?.trim()) {
          res.status(400).json("name is required");
          return;
        }

        if (email?.trim() == "" || !email?.trim()) {
          res.status(400).json("email is required");
          return;
        } 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new User({ name, email, password }); 

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });  
        
    } catch (error) {
        res.status(500).json({ message: "register error" });  
    }
}
// *************************************************login*********************
 const loginHandler =async (req, res) => {
  
  try {
    const { email, password } = req.body;   
    const user = await User.findOne({ email });
    if (!user) {        
      return  res.status(400).json({ message: "Invalid email or password" });
    }   
    if(!email){
      return res.status(400).json({ message: "Email is required" });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    res.status(200).json({ message: "Login successful" });

  } catch (error){
    res.status(500).json({ message: "Server error" });
  } 
}
// ***********************awarness************

import Report from "../modal/Report.js";

 const createReport = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res
        .status(400)
        .json({ message: "User, title, and description are required" });
    }

    const report = await Report.create({ title, content, author });

    res.status(201).json({ message: "Report submitted successfully", report });
  } catch (error) {
    console.error("Create Report Error:", error.message);
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
}; 

//***************************  Get All Reports **********************//
 const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("title", "content author");
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// ***************************************************gethelpline no**********
import Helpline from "../modal/helpline.js";
const getAllHelplines = async (req, res) => {
try {
  const helplines = await Helpline.find({});
  res.status(200).json(helplines);
} catch (error) {
  console.log(error);
  
}
}
// *****************************************complain***************
import complaint from "../modal/complaint.js";

const complainHandler = async (req, res) => {
  try { 
    const { userId, subject, description } = req.body;
    if (!userId || !subject || !description) {
      return res
        .status(400)
        .json({ message: "User ID, subject, and description are required" });
    }

    const newComplaint = new complaint({ userId, subject, description });
    await newComplaint.save();

    res.status(201).json({ message: "Complaint submitted successfully", newComplaint });
  }
    catch (error) {
      console.error("Complain Handler Error:", error.message);
      res.status(500).json({ message: `Server error: ${error.message}` });
    } 
  }
export {registerHandler,loginHandler,createReport, getAllReports, getAllHelplines,complainHandler};