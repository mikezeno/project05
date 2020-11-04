import express from 'express'; 
import {v4 as uuidv4} from 'uuid';
import Router from 'express-promise-router';
import blogdb from '../data/BlogData.js'

// blog routes
const blogrouter = Router();

// get all blog posts
const getBlogPosts = (req, resp) => {
    const sqlSelect = 'SELECT * FROM posts';
    blogdb.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        }
        resp.send(result);
    });
};

// find a blog post
const findBlogPost = (req, resp) => {
    const id = req.params.id
    const sqlSelect = 'SELECT * FROM posts WHERE id = ?';
    blogdb.query(sqlSelect, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        resp.send(result);
    });
};

// create new blog post
const addBlogPost = async (req, resp) => {
    const title = req.body.title;
    const postText = req.body.postText;
    const userName = req.body.userName
    console.log('title:',title,'post text:', postText,'username:', userName)
    const sqlInsert = 'INSERT INTO posts (title, post_text, user_name) VALUES (?, ?, ?)';
    blogdb.query(sqlInsert, [title, postText, userName], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
};

// delete a blog post
const deleteBlogPost = async (req, resp) => {
    const id = req.params.id
    const sqlDelete = 'DELETE FROM posts WHERE id = ?';
    blogdb.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err)
    });
};


// update a blog post
const updateBlogPost = async (req, resp) => {
    console.log('trying to update blog post...')
    const id = req.body.id;
    const postText = req.body.postText
    const sqlUpdate = 'UPDATE posts SET post_text = ? WHERE id = ?';
    blogdb.query(sqlUpdate, [postText, id], (err, result) => {
        if (err) console.log(err)
    });
};

// like a blog post
const likeBlogPost = async (req, resp) => {
    const id = req.params.id;
    const sqlUpdate = 'UPDATE posts SET likes = likes + 1 WHERE id = ?';
    blogdb.query(sqlUpdate, id, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
};


// all routes are starting with /blog
blogrouter.get('/get', getBlogPosts);
blogrouter.get('/get/:id', findBlogPost);
blogrouter.post('/create', addBlogPost);
blogrouter.delete('/delete/:id', deleteBlogPost);
blogrouter.put('/edit', updateBlogPost);
blogrouter.put('/like/:id', likeBlogPost);

export default blogrouter;
