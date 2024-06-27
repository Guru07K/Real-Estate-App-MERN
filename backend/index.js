const express = require('express');
const app = express();
const connectDatabase = require('./config/database');
const dotenv = require("dotenv")
const path = require("path");
const authRouter = require('./routes/auth.route');
dotenv.config({path: path.join(__dirname,"./config/.env") });

app.use(express.json());
connectDatabase();



app.use('/api/auth',authRouter);







app.listen(process.env.PORT,() =>{
    console.log('Server is running on port 3000');
})                               