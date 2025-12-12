import dotenv from "dotenv";
import Product from "./model/product.js";
import DB from "./DB/connectdb.js";
import mongoose from "mongoose";
import productjson from "./products.json" assert { type: "json" };

dotenv.config();

const db = async () => {
  try {
    await DB();
    await Product.create(productjson);
    // await Product.deleteMany();
    console.log("Products inserted");
  } catch (error) {
    console.log("error from productDb", error);
  }
};

db(); 
