// As funções abaixo estão encapsuladas, escondidas do restante da aplicação
// Para torná-las visíveis usamos module.exports

function salvar(req, res) {
    // Em uma requisição desse tipo poderia pegar os parâmetros do formulário
    res.send("Usuario > salvar") 
}

function obter(req, res) {
    res.send("Usuario > obter")
}

module.exports = { salvar, obter }