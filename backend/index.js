const express = require('express');
const app = express();
const connectDatabase = require('./config/database');
const dotenv = require("dotenv")
const path = require("path");
dotenv.config({path: path.join(__dirname,"./config/.env") });


connectDatabase();

app.listen(process.env.PORT,() =>{
    console.log('Server is running on port 3000');
})                              