const express = require('express');
const app = express();
const porta = 4000;
const op = require('./controllers/calculadora.js');

app.use(express.json())

// app.get('/calculadora/:n1/:n2', (req, res) => {
//     const n1 = parseFloat(req.params.n1);
//     const n2 = parseFloat(req.params.n2);
//     const soma = n1 + n2;
    
//     // res.send(req.params);
//     res.send(`A soma é: ${soma}`); 
//     // res.json(req.params)
// });

app.get('/calculadora/somar', (req, res) => {

    const result = op.soma(req.body)

    res.send(`O resultado da soma é: ${result}`);
})

app.get('/calculadora/subtrai', (req, res) => {

    const result = op.subtrai(req.body)

    res.send(`O resultado da subtração é: ${result}`);
})

app.get('/calculadora/multiplica', (req, res) => {

    const result = op.multiplica(req.body)

    res.send(`O resultado da multiplicação é: ${result}`);
})

app.get('/calculadora/divide', (req, res) => {

    const result = op.divide(req.body)

    res.send(`O resultado da divisão é: ${result}`);
})


app.listen(porta, () => {
    console.log(`O servidor iniciou na porta ${porta}`);
})