import mongoose from "mongoose"

const productSchema = new mongoose.Schema({

  name : {
    type : true,
    required : true
  },

  description : {
    type : true,
    required : true
  },


  productImage : {
    type : String,
    required : true
  },


  price : {
    type : Number,
    default : 0,
    required : true,
  },

  stock : {
    type : Number,
    default : 0,
  },

  category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Category",
    required : true
  },

  owner: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true,

  }

}, {timestamps : true})

export const Product = mongoose.model("Product", productSchema)