import { createHash } from 'crypto';

function criarHash (senha) {
    return createHash('sha256').update(senha).digest('hex');
}

class Usuario {
    constructor( nome, senha ) {
        this.nome = nome;
        this.hash = criarHash(senha);
    }

    autentica(nome, senha) {
        if(nome === this.nome && this.hash === criarHash(senha)) {
            console.log('Usuário autenticado com sucesso!')
            return true
        }
        console.log('Usuário ou senha incorretos.')
        return false
    }
}

const usuario = new Usuario("Dirceu dos Santos", "senhaMassa")

//caso de sucesso
usuario.autentica("Dirceu dos Santos", "senhaMassa")

//caso de erro
usuario.autentica("Dirceu dos Santos", "senhamassa")
