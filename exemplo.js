const express = require('express');
const app = express();
const porta = 3000;

//DOIS PARAMETROS O REQ É REFERENTE A REQUEST QUE É A REQUISIÇÃO
//E O RES É REFERENTE A RESPONSE QUE É A RESPOSTA

app.get('/principal', (req, res) => {
    res.send("Boa noite, essa é rota principal.");
});

/* app.get('/segunda-rota', (req, res) => {
    res.send("Olá Mundo!");
}); */

app.get('/segunda-rota/:nome/:idade/:curso', (req, res) => {
    req.params;
    res.send(`Seu nome é: ${req.params.nome}.
    Você tem: ${req.params.idade} anos de idade.
    Seu curso é: ${req.params.curso}.`);
})

app.listen(porta, () => {
    console.log(`O servidor iniciou na porta ${porta}`)
});