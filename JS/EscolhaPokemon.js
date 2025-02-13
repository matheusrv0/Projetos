const prompt = require("prompt-sync")(); 

let escolhaDoTreinador = parseInt(prompt("Escolha seu Pokémon inicial 1, 2, 4 ou 5 "));
let pokemonEscolhido;


if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
} else {
    pokemonEscolhido = "inválido";
}


if (pokemonEscolhido !== "inválido") {
    console.log("Você escolheu o " + pokemonEscolhido + " como seu Pokémon inicial.");
} else {
    console.log("Escolha inválida! Por favor, escolha um número válido.");
}
