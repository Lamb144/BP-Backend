// Import necessary modules or dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//Create an instance of Express App
const app = express();


//Middleware
app.use(express.json());


//Connect to MongoDB or Database
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB!');
    }).catch((error) => {
        console.log('Error with connecting to MongoDB:', error.message);
    });

//Start the Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

