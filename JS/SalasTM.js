const prompt = require("prompt-sync")(); 

const totalSalas = parseInt(prompt("Digite o número total de salas: "));

const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

for (let sala = 1; sala <= totalSalas; sala++) {
    const comTesouro = salasComTesouro.includes(sala);
    const comMonstro = salasComMonstro.includes(sala);

    if (comTesouro) {
        console.log("Tesouro na sala " + sala );
    } else if (comMonstro) {
        console.log("Monstro na sala " + sala );
    }
}
