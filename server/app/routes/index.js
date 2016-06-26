var api = require('../api'),
    path = require('path');

module.exports = function (app) {

    app.route('/api/v1/bens')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/api/v1/bens/:bemId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    app.get('/api/v1/tipos', api.listaTipos);
    app.get('/api/v1/bens/tipo/:tipoId', api.listaPorTipo);

    // habilita o HTML5MODE
    app.all('/*', function (req, res) {
        res.sendFile(path.resolve('client_exercicios/index.html'));
        // res.sendFile(path.resolve('client_gabarito/index.html'));
    });
};
