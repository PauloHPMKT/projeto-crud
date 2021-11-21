const mongoose = require('mongoose')

function connect() { // função connect chama conexão com database
    //abrindo conexão com o banco de dados
    mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

    //apos abrir uma conexao é necessário criar uma instancia para trabalhar com o mongoose 
    const db = mongoose.connection

    db.once('open', () => {
        console.log('connected to database')
    })
    //metodo on() retorna tratativas de erros, nesse caso utiliza bind para conectar o que ele receberá no console.log acima
    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}