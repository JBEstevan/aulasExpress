function soma(body)
{
    return (parseFloat(body.n1) + parseFloat(body.n2));

}

function subtrai(body)
{
    return (parseFloat(body.n1) - parseFloat(body.n2));

}

function multiplica(body)
{
    return (parseFloat(body.n1) * parseFloat(body.n2));

}

function divide(body)
{
    return (parseFloat(body.n1) / parseFloat(body.n2));

}



module.exports = {
    soma,
    subtrai,
    multiplica,
    divide
}


/* const prompt = require('prompt-sync')();

let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");
let resultado;

const entrada = prompt(`     Calculadora Express     
Digite o símbolo referente a operação que deseja realizar:

(+) PARA OPERAÇÕES DE ADIÇÃO
(-) PARA OPERAÇÕES DE SUBTRAÇÃO
(*) PARA OPERAÇÕES DE MULTIPLICAÇÃO
(/) PARA OPERAÇÕES DE DIVISÃO
(0) PARA FECHAR A CALCULADORA
`);

switch (entrada) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 + numero2;
        break;
    case "*":
        resultado = numero1 + numero2;
        break;
    case "/":
        resultado = numero1 + numero2;
        break;
    case "0":
        console.log("Até a próxima.")
        break;
    default: console.log("Digite uma opção válida!")
        break;
}
 */

