// Definindo o nome do herói e sua experiência
let heroi = "Lord Sith Order of the Bloods";
let xp = 5001;

// Inicializando a variável de nível
let nivel = "";

// Verificando o nível com base na experiência do herói
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp < 2000) {
    nivel = "Bronze";
} else if (xp < 5000) {
    nivel = "Prata Ouro";
} else if (xp < 8000) {
    nivel = "Platina Diamante";
} else if (xp < 9000) {
    nivel = "Ascendente";
} else if (xp < 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo o resultado no console
console.log(`O herói de nome ${heroi} está no nível de ${nivel}`);