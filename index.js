const express = require('express')
//Instanciando o express que retornará a aplicação
const app = express()

// Método use recebe como parâmetro a requisição e resposta
// Permite tanto executar um get quanto um post
// Uma callback devolve a resp
app.use('/opa',(req, res) => {
    res.send('Estou <b>bem</b>!.')
})

//Backend executando na porta 3000
app.listen(3000, () => {
    console.log('Beckend executando...')
})

