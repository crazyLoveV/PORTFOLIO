import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()

import {router} from './router.js';


const PORT = 3000;

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
  
export default app;


/// 1. Создаём сервер npm init -y
/// 2. Качаем библиотеки npm i express cors cookie-parser
/// 3. Качаем нодемон для перезапуска сервера после изменений npm i nodemon --save-dev
/// 4. После создания и первичного теста сервера добавим модуль конфигурации npm i dotenv
/// 7. На этапе регистрации пользователя понадобились ещё библиотеки: npm i jsonwebtoken bcrypt
/// JWT - для токена, bcrypt - криптография, хеширование
/// 8. Для /latency качаем npm i child_process iconv-lite
/// npm run start - запуск сервера
