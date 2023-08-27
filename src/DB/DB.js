const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test',
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connection succeeded');
})

module.exports = connection;