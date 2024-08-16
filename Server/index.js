const express= require ('express')
const mongoose =require('mongoose')
const cors =require('cors')
const app = express ()
const bodyParser = require('body-parser')
const register=require('./routes/Register.js')
const login=require('./routes/login.js')
const reset=require('./routes/reset.js')
const email=require('./routes/verify-email.js')
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config()

app.listen(process.env.PORT, () =>{
 console.log(`app is listening on ${process.env.PORT}`)
})

mongoose.connect("mongodb+srv://manognagunnala15:Manu123g@cluster0.uaxznny.mongodb.net/thyroid?retryWrites=true&w=majority")
.then (() => {
    console.log("connected to mongodb");

})
.catch((error) => {
    console.log(`error connecting to mongodb: ${error}`);
})
app.use(register);
app.use(login);
app.use(reset);
app.use(email);
