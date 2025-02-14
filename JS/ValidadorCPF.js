const prompt = require('prompt-sync')();

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); /* 
    / e / são delimitadores de expressão regular, \D é qualquer caractere que não seja um dígito, 
    g é global, ou seja, substitui todas as ocorrências, "" é o que substituirá, ou seja por nada 
    */

    if (cpf.length !== 11) return false; 

   
    let soma1 = (parseInt(cpf[0]) * 10) + (parseInt(cpf[1]) * 9) + (parseInt(cpf[2]) * 8) + (parseInt(cpf[3]) * 7) + (parseInt(cpf[4]) * 6) + (parseInt(cpf[5]) * 5) + (parseInt(cpf[6]) * 4) + (parseInt(cpf[7]) * 3) + (parseInt(cpf[8]) * 2);
    let soma2 = (parseInt(cpf[0]) * 11) + (parseInt(cpf[1]) * 10) + (parseInt(cpf[2]) * 9) + (parseInt(cpf[3]) * 8) + (parseInt(cpf[4]) * 7) + (parseInt(cpf[5]) * 6) + (parseInt(cpf[6]) * 5) + (parseInt(cpf[7]) * 4) + (parseInt(cpf[8]) * 3);

    let primeiroVerificador = (soma1 * 10) % 11;

    soma2 += primeiroVerificador * 2; //atribui o valor do primeiro verificador multiplicado por 2 à soma2
    let segundoVerificador = (soma2 * 10) % 11;

    if (primeiroVerificador === 10) primeiroVerificador = 0;
    if (segundoVerificador === 10) segundoVerificador = 0;

    
    return primeiroVerificador == parseInt(cpf[9]) && segundoVerificador == parseInt(cpf[10]);
}

const cpfUser = prompt("Digite o CPF: ");
if (validarCPF(cpfUser)) {
    console.log("CPF válido!");
} else {
    console.log("CPF inválido!");
}
