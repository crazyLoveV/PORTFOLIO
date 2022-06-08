const express = require ("express");
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express()
const jsonParser = express.json();
const {router} = require ('./router.js');

const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', router);

app.get('/', async (req, res) => {
    res.status(200).json('Server is work!')
})

app.use('*', (req, res, next) => {
    res.status(404).json({ message: `Path ${req.originalUrl} not found!` });
    next();
  });


app.post("/getData", jsonParser, (request, response) => {
    try {
        console.log("Everything is okey!");
        console.log((request.body));

        if(request.body) return () => {
            try {
                console.log({
                    status: 200,
                    body: JSON.stringify(request.body)
                }.json());
                response.sendStatus(200) 
                response.send('Something')        
            } catch (error) {
                console.log(error);
                return false 
            }
        };       
        if(!request.body) return response.send('Something'), response.sendStatus(400);        
    } catch (error) {
        console.log(error);
        
        return false 
    }
});
  
async function start() { 
    try {
      app.listen(PORT, () => {
        console.log(`Server has been started on ${PORT}`);
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  start();
  
module.exports = app;


/// 1. Создаём сервер npm init -y
/// 2. Качаем библиотеки npm i express cors cookie-parser
/// 3. Качаем нодемон для перезапуска сервера после изменений npm i nodemon --save-dev
/// 4. После создания и первичного теста сервера добавим модуль конфигурации npm i dotenv
/// 7. На этапе регистрации пользователя понадобились ещё библиотеки: npm i jsonwebtoken bcrypt
/// JWT - для токена, bcrypt - криптография, хеширование
/// 8. Для /latency качаем npm i child_process iconv-lite
/// npm run start - запуск сервера
