import { getConnection } from '../data/db.js'

// Register user
export const dbCreateUser = async (user) => {
    var user;
    let conn = await getConnection();
    const resultHandler = (err, result, resolve) => {
        if (err) {
            console.log('dbCreateUser: connection error: ' + err)
            resolve({ err: err });
        }
        if (result.length > 0) {
            resolve(result)
            console.log('dbCreateUser: connection successful');
        } else {
            resolve({ message: 'Invalid username or password.' })
        }
    }
    try {
        return new Promise( (resolve, reject) => {
            const firstname = user.firstname;
            const lastname = user.lastname;
            const username = user.username;
            const password = user.password;
            const sqlInsert = 'INSERT INTO users (firstname, lastname, username, password) VALUES (?, ?, ?, ?)';
            conn.query(sqlInsert, [firstname, lastname, username, password], (err, result) => {
                resultHandler( err, result, resolve)
            })
        })
    }
    catch (err) {
        console.log('dbCreateUser: caught error: ' + err)
    }
    finally {
        if (conn) conn.end();
    }
    return new Promise( (resolve, reject) => {resolve(0)})
}

//Validate user login
export const dbvalidateUser = async (user) => {
    var user;
    let conn = await getConnection();
    const resultHandler = (err, result, resolve) => {
        if (err) {
            console.log('dbCreateUser: connection error: ' + err)
            resolve({ err: err });
        }
        if (result.length > 0) {
            resolve(result)
            console.log('dbCreateUser: connection successful');
        } else {
            resolve({ message: 'Invalid username or password.' })
        }
    }
    try {
        return new Promise( (resolve, reject) => {
            const username = user.username;
            const password = user.password;
            const sqlSelect = 'SELECT * FROM users WHERE username = ? AND password = ?';
            conn.query(sqlSelect, [username, password], (err, result) => {
                resultHandler( err, result, resolve)
            })
        })
    }
    catch (err) {
        console.log('dbCreateUser: caught error: ' + err)
    }
    finally {
        if (conn) conn.end();
    }
    return new Promise( (resolve, reject) => {resolve({})})
}