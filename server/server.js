// Imports 
import express from 'express'; //const express = require('express')
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import reviewRoutes from './api/Reviews.js';
import userRoutes from './api/Users.js'
import questionRoutes from './api/Questions.js'

// Constants
const app = express();
const port = 3001;

// Middleware
app.set('view engine', 'ejs'); //probably don't need
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Listener
app.listen(port, () => {
    console.log('Listening on port ' + port)
});

// Routes
app.use('/reviews', reviewRoutes);
app.use('/user', userRoutes);
app.use('/question', questionRoutes);
