const musicas = [
    "musicas/Zé Neto e Cristiano - Bobo Fui Eu  (DVD Ao vivo em São José do Rio Preto).mp3",
    "musicas/Kiko Chicabana e @NatanzinhoLimaOficial  - Pega Pega (DVD Nostalgia).mp3",
    "musicas/Hugo e Guilherme - Coração na Cama I DVD No Pelo 3.mp3",
    "musicas/Matheus & Kauan - Incerteza - Na Praia Ao Vivo.mp3",
    "musicas/Henrique e Juliano - COMPLETA A FRASE part. Marília Mendonça -DVD Menos é Mais - IG henriqueejuliano.mp3",
    "musicas/Henrique e Juliano - Até Você Voltar (DVD Ao vivo em Brasília) [Vídeo Oficial].mp3",
    "musicas/Tayrone - Cê Tá Preparada (Ao Vivo Em Goiânia _ 2021) ft. Marília Mendonça.mp3",
    "musicas/SEU JUIZ - Guilherme e Santiago, @gusttavolimaoficial.mp3",
    "musicas/Guilherme e Benuto - Nos Bares da Cidade _ Morro de Saudade _ Xote dos Milagres.mp3",
    "musicas/Henrique e Juliano - CIDADE VIZINHA - DVD Menos é Mais - IG henriqueejuliano.mp3"
];

let indiceAtual = 0;
let audioPlayer = document.getElementById('audio-player');

function carregarMusica() {
    audioPlayer.src = musicas[indiceAtual];
    audioPlayer.load(); 
    document.getElementById("musica-atual").innerText = "Música: " + musicas[indiceAtual].split("/").pop();
}

function tocarMusica() {
    if (audioPlayer.paused) {
        audioPlayer.play(); 
    }
}

function pausarMusica() {
    audioPlayer.pause(); 
}

function proximaMusica() {
    indiceAtual = (indiceAtual + 1) % musicas.length; // Calcula o próximo índice
    carregarMusica(); 
    tocarMusica(); 
}

carregarMusica();
tocarMusica();
