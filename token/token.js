import jwt from "jsonwebtoken";

const chaveSecreta = "ChaveSuperSecreta";

const token = jwt.sign(
    {
        apelido: "ds",
        curso: "segurança e node.js"
    },
    chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado)