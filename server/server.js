// Imports 
import express from 'express'; //const express = require('express')
import bodyParser from 'body-parser';
import mysql from 'mysql'
import cors from 'cors'
//import appRoutes from './routes/app.js';

// Constants
const app = express();
const port = 3001;

// Database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'moviesdb'
})

// Middleware
app.set('view engine', 'ejs'); //probably don't need
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.listen(port, () => {
    console.log('Listening on port ' + port)
});

app.get('/api/get', (req, resp) => {
    const sqlSelect = 'SELECT * FROM moviereviews';
    db.query(sqlSelect, (err, result) => {
        resp.send(result)
    });
});

app.post('/api/insert', (req, resp) => {
    const movieName  = req.body.movieName
    const movieReview = req.body.movieReview
    const sqlInsert = 'INSERT INTO moviereviews (name, review) VALUES (?, ?)';
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result)
    });
})

app.delete('/api/delete/:id', (req, resp) => {
    const id = req.params.id
    const sqlDelete = 'DELETE FROM moviereviews WHERE id = ?';
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err)
    });
})

app.put('/api/update', (req, resp) => {
    const id = req.body.id;
    const movieReview = req.body.movieReview
    const sqlUpdate = 'UPDATE moviereviews SET review = ? WHERE id = ?';
    db.query(sqlUpdate, [movieReview, id], (err, result) => {
        if (err) console.log(err)
    });
})

// function home(req, resp) {
//     const sqlInsert = 'INSERT INTO moviereviews (name, review) VALUES ("Inception", "Good movie. Would wach it again.")';
//     db.query(sqlInsert, (err, result) => {
//         resp.send('Hello From Server');
//     });
// };

//app.get('/', home);
//app.use('/movies', appRoutes);

