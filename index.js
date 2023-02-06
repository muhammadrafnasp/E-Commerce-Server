// import express

const express = require('express');

//import cors

const cors = require('cors');

//import dataServices

const dataServices = require('./services/dataServices');

//create an application using express

const app = express();

//use json parser for server response

app.use(express.json())

//using cors specify the origin to the server
app.use(cors({
    origin:'http://localhost:4200'
}))

// setup a port number

app.listen(3000, ()=>{
    console.log('listening on port:3000');
})


//API call to get all products
app.get('/all-products',(req,res)=>{
    dataServices.getProducts().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to addtowishlist
app.post('/addtowishlist',(req,res)=>{
    dataServices.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )})

// api call to get wishlists products
app.get('/getwishlist',(req,res)=>{
    dataServices.getwishlist().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// api call to delete wishlists products
app.delete('/deletewish/:id',(req,res)=>{
    dataServices.deletewish(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
