//import mongoose

const mongoose = require('mongoose')

//define the connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mongodb');
})

//create a model for the products

const Product = mongoose.model('Product',{
    //schema creation
    id:Number,
    title:String,
    price:Number,
    descriprtion:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }

})

//create a new collection in mongodb - create a model
const Wishlist = mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    image:String,
    description:String
})

module.exports={
    Product,
    Wishlist
}