let heroi = "Lord Sith Order of the Bloods";
let xp = 5001;
let nivel = "";

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

console.log(`O herói de nome ${heroi} está no nível de ${nivel}`);