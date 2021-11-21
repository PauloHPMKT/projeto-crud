const mongoose = require('mongoose')

//criando tabela - collections - feito sob demanda
//definindo uma tabela
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

//MVC - (MODEL)
//crindo uma collection chamada customers
const Model = mongoose.model('customers', schema)


module.exports = Model

/*const register = new Model({
    name: 'Paulo Sergio',
    age: 30,
    email: 'pauloserg861@gmail.com',
    password: '123456'
}) // criando uma nova instancia por ser um registro novo 

register.save()*/