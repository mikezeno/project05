import { v4 as uuidv4 } from 'uuid';
import Router from 'express-promise-router';
//import userdb from '../data/Users.js'
import { dbCreateUser, dbvalidateUser } from '../data/UsersData.js'

// login router
const userrouter = Router();

const createUser = async (req, resp) => {
    const user = req.body;
    const result = await dbCreateUser(user)
    console.log('result from create user', result);
    resp.send(result)
};


const validateUser = async (req, resp) => {
    console.log('inside validate user api. req=', req.body)
    const user = req.body;
    const result = await dbvalidateUser(user)
    console.log('result from validate user', result);
    resp.send(result)
};


// // Register new user
// const createUser = async (req, resp) => {
//     const dbconn = await getConnection();
//     try {
//         const username = req.body.username;
//         const password = req.body.password;
//         const sqlInsert = 'INSERT INTO users (username, password) VALUES (?, ?)';
//         dbconn.query(sqlInsert, [username, password], (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(result);
//         });
//     }
//     catch (err) {
//         console.log('dbCreateUser Error:', err);
//     }
//     finally {
//         if (dbconn) {
//             dbconn.end();
//             console.log('Connection closed')
//         }
//     };
// };

// Validate user login
// const validateUser = async (req, resp) => {
//     const dbconn = await getConnection();
//     try {
//         const username = req.body.username;
//         const password = req.body.password;
//         const sqlSelect = 'SELECT * FROM users WHERE username = ? AND password = ?';
//         dbconn.query(sqlSelect, [username, password], (err, result) => {
//             if (err) {
//                 resp.send({ err: err })
//             }
//             if (result.length > 0) {
//                 resp.send(result)
//             } else {
//                 resp.send({ message: 'Invalid username or password.' })
//             }
//         });
//     }
//     catch (err) {
//         console.log('Validate User Error:', err);
//     }
//     finally {
//         if (dbconn) {
//             dbconn.end();
//             console.log('Connection closed')
//         }
//     };
// };

// Login routes
userrouter.post('/register', createUser);
userrouter.post('/login', validateUser);

export default userrouter;