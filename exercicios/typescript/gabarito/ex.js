function saudar(pessoa) {
    return 'Olá, ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome;
}
var usuario = { primeiroNome: 'José', ultimoNome: 'Silva' };
console.log(saudar(usuario));
