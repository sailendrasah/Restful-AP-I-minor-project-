import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  feature: {
    type: Boolean,
    required: false,
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "Dell", "mi"],
      message: `{VALUE} is not supported`,
    },
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createAdt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
