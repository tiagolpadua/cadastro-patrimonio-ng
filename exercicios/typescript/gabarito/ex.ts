interface Pessoa {
    primeiroNome: string;
    ultimoNome: string;
}

function saudar(pessoa: Pessoa) {
    return 'Olá, ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome;
}

var usuario = { primeiroNome: 'José', ultimoNome: 'Silva' };

console.log(saudar(usuario));
