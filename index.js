const express = require('express')
const saudacao = require('./saudcaoMiddle')
const bodyParser = require('body-parser')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')

//Instanciando o express que retornará a aplicação
const app = express()

// Invocando a função contida em produto api
produtoApi(app, 'com param...')


// Chamando as funções dentro de usuário
// se o usuário digitar /usuario, vai chamar usuarioApi.salvar
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


//Passando dois parâmetros, se o relatório será completo e o ano do relatório
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
}) 

// Qualquer texto que chegar dentro da requisição será interpretado
app.use(bodyParser.text()) // retorna uma função meddleware
app.use(bodyParser.json()) // retorna uma função meddleware
app.use(bodyParser.urlencoded({extended: true})) // Chamando um parser de url encoded

// Passando parâmetros no corpo da requisição com post, usando a forma difícil sem o body parser
app.post('/corpo', (req, res) => {
    // let corpo = ''
    // //Qdo chegar dados a partir do corpo da requisição
    // req.on('data', function(parte){ // função recebe a parte que está chegando
    //     corpo += parte
    // })
    // //Mandando de volta o que foi recebido
    // req.on('end', function(){
    //     res.send(corpo)
    // })

    // Com a dependência do body-parser a linha abaixo faz o mesmo que o código acima comentado
    res.send(req.body)
})

//Passando id como parâmentro diretamente na url
app.get('/clientes/:id', (req, res) => {
    // Acessando parâmetro id para uma template string
    res.send(`Cliente ${req.params.id} selecionado!`)
})


// Usando a função saudação importada
app.use(saudacao('Guilherme'))

 // Função middleware
 app.use('/opa', (req, res, next) => {
    console.log("Antes...")
    next()
})

// Método use recebe como parâmetro a requisição e resposta
// Permite tanto executar um get quanto um post
// Uma callback devolve a resp
app.get('/opa',(req, res, next) => {
    console.log("Durante...")
    // Passando array de objetos
    // res.json([
    //     {id: 7, name: "Ana", position: 1 },
    //     {id: 34, name: "Bia", position: 2 },
    //     {id: 73, name: "Carlos", position: 3 }
    // ])

    //Passando um objeto com informações da requisição
    res.json({
        data: [
            {id: 7, name: "Ana", position: 1 },
            {id: 34, name: "Bia", position: 2 },
            {id: 73, name: "Carlos", position: 3 }
        ],
        count: 30, // POderia retornar um count para dizer qts registros tem na base
        skip:0, // tbm um skip para trabalhar com paginação
        limit: 3, // Limitando numero de páginas
        status: 200 // Pode conter um status

    })
    next()    

    /*
    Enviando resposta em json
    res.json({
        name:"Ipad 32GB",
        price:2135.90,
        discount: .12    
    })
    */
    // res.send('Estou <b>bem</b>!.')
})

app.use((req, res) => {
    console.log("Depois...")       
})

//Backend executando na porta 3000
app.listen(3000, () => {
    console.log('Beckend executando...')
})

