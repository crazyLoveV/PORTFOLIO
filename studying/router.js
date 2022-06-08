const { Router } = require ('express');
const compile_deploy = require('./scripts/compile_deploy.js');
// Controllers
const compile_class = new compile_deploy()
const router = Router();

router.post('/deploy_compile', compile_class.compile_deploy_method);
//router.post('/signup', UserController.signup);

//router.get('/info', authenticate, UserController.info); // authenticate проверит юзера в бд и обновит токен при вызове функции
//router.get('/logout', authenticate, UserController.logout);
//router.get('/latency', authenticate, UserController.latency);

module.exports = { router };