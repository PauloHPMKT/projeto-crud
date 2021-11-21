const router = require('express').Router()

const CustomersController = require('../controllers/customers') 
const IndexController = require('../controllers/index')

//definindo rotas
router.get('/', IndexController.index)

//register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//Listar usuarios
router.get('/list', CustomersController.listUsers)

//editar usuarios
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//remover usuario
router.get('/remove/:id', CustomersController.remove)

module.exports = router