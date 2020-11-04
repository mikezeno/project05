import mysql from 'mysql';

const blogdb = mysql.createConnection({
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "root",
    "database": "blogpostdb"
})

export default blogdb;
