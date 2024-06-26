import { generateKeyPairSync } from 'crypto';

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
});

// console.log(publicKey);
// console.log(privateKey);

import { publicEncrypt, privateDecrypt } from 'crypto';

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from('Mensagem super secreta')
);

console.log(dadosCriptografados.toString('hex'));

//Transmissão de dados

const dadosDescriptografados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Decifrando mensagem: ${dadosDescriptografados.toString('utf-8')}`)