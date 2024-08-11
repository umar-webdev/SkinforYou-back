// require('dotenv').config()
import connectDB from "../src/db/index.js";
import dotenv from 'dotenv'
import {app} from './app.js'

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Error",error)
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log('Server is running on port 8000')
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed!!!",err)
})
