import express from "express";
import {
  loginHandler,
  registerHandler,
  createReport,
  getAllReports,
  getAllHelplines,
  complainHandler,
} from "../controller/auth.js";

const router = express.Router();

router.post("/login", loginHandler);
router.post("/register", registerHandler);
router.post("/Awarness_create", createReport);
router.get("/Awarness_Read", getAllReports);
router.get("/Get_helpline", getAllHelplines);
router.post("/complain", complainHandler);



export default router;
