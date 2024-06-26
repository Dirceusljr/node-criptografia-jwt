import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const mensagem = "Demonstração do curso";
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv("aes256", chave, vi);
const mensagemCifrada = cifra.update(mensagem, "utf-8", "hex") + cifra.final("hex");

console.log(mensagemCifrada);

//Transmissão chave, vi e mensagemCifrada

const decifra = createDecipheriv("aes256", chave, vi);
const mensagemDecifrada = decifra.update(mensagemCifrada, "hex", "utf-8") + decifra.final("utf-8");

console.log(`Decifrada: ${mensagemDecifrada.toString("utf-8")}`);