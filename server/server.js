// Imports 
import express from 'express'; //const express = require('express')
import bodyParser from 'body-parser';
import cors from 'cors';
import reviewRoutes from './api/Reviews.js';
import blogRoutes from './api/Blog.js'

// Constants
const app = express();
const port = 3001;

// Middleware
app.set('view engine', 'ejs'); //probably don't need
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.json());
app.use(cors());

// Routes
app.listen(port, () => {
    console.log('Listening on port ' + port)
});

app.use('/reviews', reviewRoutes);
app.use('/blog', blogRoutes);

