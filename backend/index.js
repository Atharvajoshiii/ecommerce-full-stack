const express = require('express')
const { Double, ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const port = 3000

const app = express()

const productSchema = mongoose.Schema({
    name:{
        type:String
    },
    discription:{
        type:String
    },
    color:String,
    price:Double,
    category:{
        type:String
    },
    ownedBy:{
        type:String
    },
    review:{
        type:[reviewSchema]
    }
})

const reviewSchema = mongoose.Schema({
    userName:{
        type:ObjectId
    },
    review:{
        type:String
    }
})



const productModel = mongoose.model('products',)

app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})