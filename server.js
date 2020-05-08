const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const url = process.env.MONGO_URL;
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true});

const connection = mongoose.connection;
connection.once(`open`,()=>{
    console.log(`Connected`);
});

const recipeRouter = require('./routes/recipes');

app.use(cors());
app.use(express.json());
app.use('/recipes',recipeRouter);

app.get("/",(req,res)=>{
    res.send({message: 'Welcome to the API!'});
});

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});

