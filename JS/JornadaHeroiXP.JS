const prompt = require("prompt-sync")();

let nivelMonstro = parseInt(prompt("digite o nível do monstro:"));
let dificuldadeBatalha;

do {
  dificuldadeBatalha = parseInt(prompt("digite a dificuldade de 1 a 100:"));
    if (dificuldadeBatalha < 1 || dificuldadeBatalha > 100) { // vai verificar se o numero digitado ta entre 1 e 100
      console.log("Valor inválido! Digite um número entre 1 e 100."); 
      // se a condição do IF for verdadeira, ou seja, INCORRETA, ele vai 
      // continuar pedindo para digitar um numero entre 1 e 100
    }
} while (dificuldadeBatalha < 1 || dificuldadeBatalha > 100); // Para conseguir sair do loop a condição tem que ser falsa, ou seja, correta

const xpGanho = nivelMonstro * dificuldadeBatalha * 100;

console.log(`Voce ganhou ${xpGanho} XP!`);
