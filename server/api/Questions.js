import Router from 'express-promise-router';
import { getConnection } from '../data/db.js'

// Question router
const questionRouter = Router();

// get all questions
const getQuestions = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        console.log('Attemping to fetch Questions...')
        const sqlSelect = 'SELECT * FROM questions';
        dbconn.query(sqlSelect, (err, result) => {
            if (err) {
                console.log('Database Error in getQuestions: ' + err);
                resp.send('Database error occurred while tyring to fetch questions. Please try again.')
            }
            console.log('Questions Fetched');
            resp.send(result);
        });
    }
    catch (err) {
        console.log('Exception Caught Error in getQuestions:', err);
        resp.send('An error occured while trying to fetch questions:', err)
    }
    finally {
        if (dbconn) {
            dbconn.end();
        }
    };
};

// find question by id
const findQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        const id = req.params.id
        console.log(`Attemping to fetch Question id:${id}...`)
        const sqlSelect = 'SELECT * FROM questions WHERE id = ?';
        dbconn.query(sqlSelect, id, (err, result) => {
            if (err) {
                console.log('Database Error in findQuestion: ' + err);
                resp.send(`Database error occurred while trying to fetch Question id:${id}. Please try again.`)
            }
            console.log(`Question id:${id} Found`);
            resp.send(result);
        });
    }
    catch (err) {
        console.log('Exception Caught Error in findQuestion:', err);
        resp.send(`An error occured while trying to fetch Question id:${id}:`, err)
    }
    finally {
        if (dbconn) {
            dbconn.end();
        }
    };
};

// create new question
const addQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        console.log('Attemping to create question...')
        const title = req.body.title;
        const body = req.body.body;
        const userid = req.body.userid
        const categoryid = 1  //hard coded needs logic
        console.log('title:', title, 'body:', body, 'userid:', userid, 'categoryid', categoryid)
        const sqlInsert = 'INSERT INTO questions (title, body, userid, categoryid) VALUES (?, ?, ?, ?)';
        dbconn.query(sqlInsert, [title, body, userid, categoryid], (err, result) => {
            if (err) {
                console.log('Database Error in addQuestion: ' + err);
                resp.send('Database error occurred while trying to add Question. Please try again.')
            }
            console.log('Question created:', result);
            resp.send('Question created:', result);
        });
    }
    catch (err) {
        console.log('Exception Caught Error in addQuestion:', err);
        resp.send('An error occured while trying to Ask Question:', err)
    }
    finally {
        if (dbconn) {
            dbconn.end();
        }
    };
};

// delete question
const deleteQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        const id = req.params.id
        console.log(`Attemping to delete Question id:${id}...`)
        const sqlDelete = 'DELETE FROM questions WHERE id = ?';
        dbconn.query(sqlDelete, id, (err, result) => {
            if (err) {
                console.log('Database Error in deleteQuestion: ' + err);
                resp.send('Database error occurred while deleting Question. Please try again.')
            }
            console.log('Question Deleted:', result);
            resp.send(`Question id:${id} Deleted`);
        });
    }
    catch (err) {
        console.log('Exception Caught Error in deleteQuestion:', err);
        resp.send(`An error occured while trying to delete Question id:${id}:`, err)
    }
    finally {
        if (dbconn) {
            dbconn.end();
        }
    };
};


// update question
const updateQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        const id = req.body.id;
        const body = req.body.postText
        console.log(`Attemping to delete update Question id:${id}...`)
        const sqlUpdate = 'UPDATE questions SET body = ? WHERE id = ?';
        dbconn.query(sqlUpdate, [body, id], (err, result) => {
            if (err) {
                console.log('Database Error in updateQuestion: ' + err);
                resp.send('Database error occurred while updating Question. Please try again.')
            }
            console.log('Question updated:', result);
            resp.send(`Question id:${id} updated`);
        });
    }
    catch (err) {
        console.log('Exception Caught Error in updateQuestion:', err);
        resp.send(`An error occured while trying to update Question id:${id}:`, err)
    }
    finally {
        if (dbconn) {
            dbconn.end();
        }
    };
};

// vote question
const voteQuestion = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        const id = req.params.id;
        console.log(`Attemping to vote for Question id:${id}...`)
        const sqlUpdate = 'UPDATE questions SET votes = votes + 1 WHERE id = ?';
        dbconn.query(sqlUpdate, id, (err, result) => {
            if (err) {
                console.log('Database Error in voteQuestion: ' + err);
                resp.send('Database error occurred while applying vote. Please try again.')
            }
            console.log(result)
            resp.send(`Question id:${id} vote applied.`);
        });
    }
    catch (err) {
        console.log('addQuestion Error:', err);
        resp.send(`An error occured while trying to vote for Question id:${id}:`, err)
    }
    finally {
        if (dbconn) {
            dbconn.end();
        }
    };
};

// blog routes
questionRouter.get('/get', getQuestions);
questionRouter.get('/get/:id', findQuestion);
questionRouter.post('/ask', addQuestion);
questionRouter.delete('/delete/:id', deleteQuestion);
questionRouter.put('/edit', updateQuestion);
questionRouter.put('/vote/:id', voteQuestion);

export default questionRouter;