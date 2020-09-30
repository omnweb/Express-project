const express = require('express')
//Instanciando o express que retornará a aplicação
const app = express()

// Método use recebe como parâmetro a requisição e resposta
// Permite tanto executar um get quanto um post
// Uma callback devolve a resp
app.use('/opa',(req, res) => {
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

//Backend executando na porta 3000
app.listen(3000, () => {
    console.log('Beckend executando...')
})

