const mysql = require('mysql')
const express = require ("express");
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express()
app.use(bodyParser.json());
app.use(cors());

const {router} = require ('./router/router');
app.use('/', router);


const PORT = 3000;

//конфигурация бд
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "vladislav",
        database: "studyingBase",
        password: "vlad2505",
    }
);


async function start() { 
    try {
         connection.connect((err) => {
            if (err) {
                return console.error("Ошибка: " + err.message);
              }
              else{
                console.log("Подключение к серверу MySQL успешно установлено");
              }
        });

        app.listen(PORT, () => {
          console.log(`Server has been started on ${PORT}`);
        });

    } catch (e) {
      console.log(e);
    }
  } 
start();

module.exports = connection