const express = require('express')
const path = require('path')

const app = express()

//definindo template engine
app.set('view engine', 'ejs')
//metodo utilizado para especificar onde está o arquivo index.ejs
app.set('views', path.join(__dirname, 'views')) 

//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//habilitando server para receber dado via post (formulario)
app.use(express.urlencoded({ extended: true }))

//definindo rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: "Titulo teste"
    })
})

//404 error (not found)
app.use((req, res) => res.send('Página não encontrada'))


//executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`Server is running on port ${port}`))