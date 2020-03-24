const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ROOT',
    database : 'timetable'
});

connection.connect(function(err){
    if(err){
        throw new Error(err);
    }
    console.log('Connection to database successfull. ');
});

module.exports = connection;