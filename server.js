require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')



const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.get('/', (req, res) => {
    res.json({msg: 'Hello world!'})


})

const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useNewUrlPraser: true,
    useUnifiedTopology: true,

}, error => {
    if(error) throw error;
    console.log("Connected to  MongoDB")


})


const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log('server is running', port)

})