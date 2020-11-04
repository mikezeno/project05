import express from 'express'; 
import {v4 as uuidv4} from 'uuid';
import Router from 'express-promise-router';
import mysql from 'mysql'

// Database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'moviesdb'
})

const router = Router();

// find all reviews
const getReviews = async (req, resp) => {
    const sqlSelect = 'SELECT * FROM moviereviews';
    db.query(sqlSelect, (err, result) => {
        resp.send(result)
    });
};


// create a review
const addReview = (req, resp) => {
    const movieName  = req.body.movieName
    const movieReview = req.body.movieReview
    const sqlInsert = 'INSERT INTO moviereviews (name, review) VALUES (?, ?)';
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result)
    });
};

// delete a review
const deleteReview = (req, resp) => {
    const id = req.params.id
    const sqlDelete = 'DELETE FROM moviereviews WHERE id = ?';
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err)
    });
};


// update a review
const updateReview = (req, resp) => {
    console.log('trying to update review...')
    const id = req.body.id;
    const movieReview = req.body.movieReview
    const sqlUpdate = 'UPDATE moviereviews SET review = ? WHERE id = ?';
    db.query(sqlUpdate, [movieReview, id], (err, result) => {
        if (err) console.log(err)
    });
};

// all routes are starting with /reviews
router.get('/get', getReviews);
router.post('/create', addReview);
router.delete('/delete/:id', deleteReview);
//router.get('/:id', queryReview);
router.put('/update', updateReview);

export default router;
