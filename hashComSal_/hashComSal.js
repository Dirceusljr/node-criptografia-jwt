import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criarHashComSal (senha) {
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`;
}

class Usuario {
    constructor (nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criarHashComSal(senha).split(':');
    }

    autentica(nome, senha) {
        if (this.nome === nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashCorrespondem = timingSafeEqual(testeHash, hashReal);

            if(hashCorrespondem) {
                console.log('Usuário autenticado com sucesso!')
                return true
            }
        }
        console.log('Usuário ou senha incorretos.')
        return false
    }
}

const jm = new Usuario("Dirceu dos Santos", "senhaMassa")

console.log(jm)

// Teste de sucesso
jm.autentica("Dirceu dos Santos", "senhaMassa")

// Testes de insucesso
jm.autentica("Dirceu dos Santos", "senhamassa")
jm.autentica("Dirceu dos santos", "senhaMassa")