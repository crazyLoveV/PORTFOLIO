const { Router } = require ('express');
const Users = require('../database/Users')

const users = new Users()
// Controllers
const router = Router();

router.get('/getUsersData', users.getUsersData);
router.post('/addUser', users.addUser);

//router.get('/info', authenticate, UserController.info); // authenticate проверит юзера в бд и обновит токен при вызове функции
//router.get('/logout', authenticate, UserController.logout);
//router.get('/latency', authenticate, UserController.latency);

module.exports = { router };