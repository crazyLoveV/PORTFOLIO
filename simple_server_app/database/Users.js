const mysql = require('mysql')
require('../server')
const connection = require('../server')
const query = "SELECT * FROM `Users`"


class Users {

    getUsersData() {

        console.log(connection);

        connection.query(query, function(err, results, fields) {
            console.log(err);
            console.log(results); // собственно данные
            console.log(fields); // мета-данные полей 
        });
    
    }

}

module.exports = Users
