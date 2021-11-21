const CustomersModel = require('../models/customers')
const { crypto } = require('../helpers/password')

const defaultTitle = 'Cadastro de clientes'

function index(req, res) {
    res.render('register', {
        title: "Cadastro de clientes",
    })
}


async function add(req, res) {
    //receber os dados do formulario
    const {
        name,
        age,
        email,
        password,
    } = req.body

    //é preciso criptografar a senha antes de enviar para o Model
    const passwordCripto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCripto,
    })

    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso'
    })
} 


async function listUsers(req, res) {
//buscanbdo usuarios no db
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: "Listagem de usuários",
        users,
    })
}


async function formEdit(req, res) {
    const {id} = req.query

    const user = await CustomersModel.findById(id)
    res.render('edit', {
        title: 'Editar usuário',
        user,
    })
}


async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const {id} = req.params

    const user = await CustomersModel.findById(id)

    //obs para consulta de dados
    //quando captura os dados de id pelo metodo get utiliza-se req.query
    //quando captura os dados de id pelo metodo post utiliza-se req.params

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar usuário',
        user,
        message: 'Usuário alterado com sucesso!'
    })

}


async function remove(req, res) {
    const { id } = req.params
    
    const remove = await CustomersModel.deleteOne({_id: id})

    console.log(remove)

    if(remove.deletedCount) { //retorna um objeto com a prop ok
        res.redirect('/list')
    }
}


module.exports = {
    index,
    add,
    listUsers,
    formEdit,
    edit,
    remove,
}