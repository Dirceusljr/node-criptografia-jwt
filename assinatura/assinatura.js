import { generateKeyPairSync, createSign, createVerify } from 'crypto';

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

let dados = 'Essa string será assinada!';

const assinador = createSign('rsa-sha256');
assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');

console.log(`Assinatura:
${assinatura}`);

//Intermediário

// dados += 'falsificado'

// Transmissão de documento: dados + assinatura + publicKey

const verificador = createVerify('rsa-sha256');
verificador.update(dados);

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex');

console.log(ehVerificado)