import { v4 as uuidv4 } from 'uuid';
import Router from 'express-promise-router';
import { getConnection } from '../data/db.js'

// login router
const userrouter = Router();

// // Register new user
const createUser = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        console.log('Attemping to create user...')
        const firstname = user.firstname;
        const lastname = user.lastname;
        const username = user.username;
        const password = user.password;
        const sqlInsert = 'INSERT INTO users (firstname, lastname, username, password) VALUES (?, ?, ?, ?)';
        conn.query(sqlInsert, [firstname, lastname, username, password], (err, result) => {
            if (err) {
                console.log('Database Error in createUser: ' + err);
                resp.status(404).send('Database error occurred while trying to create user. Please try again.')
            }
            console.log('User created: ' + result);
            resp.status(201).send(result);
        });
    }
    catch (err) {
        console.log('Exception error caught in createUser: ' + err);
        resp.status(500).send('An error occured while trying to create user: ' + err)
    }
    finally {
        if (dbconn) {
            dbconn.end();
        }
    };
};

// Validate user login
const validateUser = async (req, resp) => {
    const dbconn = await getConnection();
    try {
        const username = req.body.username;
        const password = req.body.password;
        const sqlSelect = 'SELECT * FROM users WHERE username = ? AND password = ?';
        dbconn.query(sqlSelect, [username, password], (err, result) => {
            if (err) {
                console.log('Database Error in validateUser: ' + err);
                resp.status(404).send('Database error occurred while trying to validate user. Please try again.', { err: err })
            }
            if (result.length > 0) {
                console.log('User authorized: ' + result);
                resp.status(200).send(result)
            } else {
                resp.status(401).send({ message: 'Invalid username or password.' });
            }
        });
    }
    catch (err) {
        console.log('Exception error caught in validateUser: ' + err);
        resp.status(500).send('An error occured while trying to validate user:' + err)
    }
    finally {
        if (dbconn) {
            dbconn.end();
        }
    };
};

// Login routes
userrouter.post('/register', createUser);
userrouter.post('/login', validateUser);

export default userrouter;