import Router from 'express-promise-router';
import { getConnection } from '../data/db.js'

// Question router
const questionRouter = Router();

// get all questions
const getQuestions = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        const sqlSelect = 'SELECT * FROM questions';
        dbconn.query(sqlSelect, (err, result) => {
            if (err) {
                console.log(err);
            }
            resp.send(result);
        });
    }
    catch (err) {
        console.log('dbCreateUser Error:', err);
    }
    finally {
        if (dbconn) {
            dbconn.end();
            console.log('Connection closed')
        }
    };
};

// find a blog post
const findQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    const id = req.params.id
    const sqlSelect = 'SELECT * FROM posts WHERE id = ?';
    dbconn.query(sqlSelect, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        resp.send(result);
    });
};

// create new question
const addQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        const title = req.body.title;
        const body = req.body.body;
        const userid = req.body.userid
        const categoryid = 1
        console.log('title:', title, 'body:', body, 'userid:', userid, 'categoryid', categoryid)
        const sqlInsert = 'INSERT INTO questions (title, body, userid, categoryid) VALUES (?, ?, ?, ?)';
        dbconn.query(sqlInsert, [title, body, userid, categoryid], (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Question created:', result);
        });
    }
    catch (err) {
        console.log('addQuestion Error:', err);
    }
    finally {
        if (dbconn) {
            dbconn.end();
            console.log('Connection closed')
        }
    };
};

// delete a blog post
const deleteQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    const id = req.params.id
    const sqlDelete = 'DELETE FROM posts WHERE id = ?';
    dbconn.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err)
    });
};


// update a blog post
const updateQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    console.log('trying to update blog post...')
    const id = req.body.id;
    const postText = req.body.postText
    const sqlUpdate = 'UPDATE posts SET post_text = ? WHERE id = ?';
    dbconn.query(sqlUpdate, [postText, id], (err, result) => {
        if (err) console.log(err)
    });
};

// like a blog post
const voteQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    const id = req.params.id;
    const sqlUpdate = 'UPDATE posts SET likes = likes + 1 WHERE id = ?';
    dbconn.query(sqlUpdate, id, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
};

// blog routes
questionRouter.get('/get', getQuestions);
questionRouter.get('/get/:id', findQuestion);
questionRouter.post('/ask', addQuestion);
questionRouter.delete('/delete/:id', deleteQuestion);
questionRouter.put('/edit', updateQuestion);
questionRouter.put('/vote/:id', voteQuestion);

export default questionRouter;