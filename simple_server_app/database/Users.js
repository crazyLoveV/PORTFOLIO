const mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "vladislav",
        database: "studyingBase",
        password: "vlad2505",
    }
);


class Users {

    getUsersData() {

        connection.query("SELECT * FROM `Users`", function(err, results, fields) {
            console.log(err);
            console.log(results); // собственно данные
            console.log(fields); // мета-данные полей 
        });
    
    }

    addUser() {  
        
        connection.query("INSERT INTO `Users` (`id`, `name`, `surname`, `phone`) " + 
    `VALUES (NULL, 'Volodya', 'Putin', '333444')`, (err, results, fields) => {
        console.log(err);
        console.log(results); // собственно данные
        console.log(fields); // мета-данные полей 

    })

    }

}


module.exports = Users
