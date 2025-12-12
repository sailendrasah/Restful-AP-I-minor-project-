import express from 'express';
import authRouter from './route/auth.js';  
import DB from "./DB/connectDb.js";

const app = express();
const port = 3000;
app.use(express.json());


app.use('/auth', authRouter);

DB().then(() => {
app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});
});