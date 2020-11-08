import mysql from 'mysql';

// const userdb = mysql.createConnection({
//     "host": "localhost",
//     "port": "3306",
//     "user": "root",
//     "password": "root",
//     "database": "blogpostdb"
// })

// export default userdb;


export const getConnection = async () => {
    let conn = mysql.createConnection({
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "root",
    "database": "blogpostdb"
    })
    await conn.connect( (err) => {
        if (err) {
            console.log('Connection Error:', err);
            return;
        }
        console.log('Connection Successful');
    });
    return conn
};

export const dbCreateUser = async (user) => {
    console.log('inside user dbcreateuser')
    var user;
    console.log('user=', user)
    let conn = await getConnection();
    try {
        const username = user.username;
        const password = user.password;
        const sqlInsert = 'INSERT INTO users (username, password) VALUES (?, ?)';
        conn.query(sqlInsert, [username, password], (err, result) => {
            resultHandler(err, result);
        });
    }
    catch (err) {
        console.log('dbCreateUser Error:', err);
    }
    finally {
        if (conn) {
            conn.end();
            console.log('Connection closed')
        }
    };
    const resultHandler = (err, result)=> {
        if (err) {
            return({ err: err })
        }
        if (result.length > 0) {
            return(result)
        } else {
            return({ message: 'Invalid username or password.' })
        }
    }
};