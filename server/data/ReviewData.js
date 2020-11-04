import mysql from 'mysql';

const getConnection = async () => {
    let conn = mysql.createConnection({
        "host": "localhost",
        "port": "3306",
        "user": "root",
        "password": "root",
        "database": "studentdb"
    })
    await conn.connect(err => {
        if (err) {
            console.log('getConnection: connection error: ' + err)
            return;
        }
        console.log('getConnection: connection successful');
    })
    return conn;
}


export const dbSelectReviews = async () => {
    var users = [];
    let conn = await getConnection();
    const resultHandler = (err, result, fields, resolve) => {
        if (err) {
            console.log('dbSelectReviews: connection error: ' + err)
            return;
        }
        console.log('dbSelectReviews: connection successful');
        for (let i = 0; i < result.length; i++) {
            let row = result[i];
            let user = { "id": row["UID"], "fname": row["FNAME"], "lname": row["LNAME"] }
            users = [...users, user]
        }
        resolve(users);
    }
    try {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT UID, FNAME, LNAME FROM USERS';
            console.log('dbSelectReviews: sql=' + sql);
            conn.query(sql, (err, result, fields) => {
                resultHandler(err, result, fields, resolve)
            })
        })
    }
    catch (err) {
        console.log('dbQueryUsers: caught error: ' + err)
    }
    finally {
        if (conn) conn.end();
    }
    return new Promise((resolve, reject) => { resolve([]) })
}