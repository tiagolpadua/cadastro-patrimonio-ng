var api = require('../api'),
    path = require('path');

module.exports = function (app) {

    app.route('/v1/bens')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/v1/bens/:bemId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    app.get('/v1/tipos', api.listaTipos);
    app.get('/v1/bens/tipo/:tipoId', api.listaPorTipo);

    // habilitando HTML5MODE
    app.all('/*', function (req, res) {
        res.sendFile(path.resolve('client/index.html'));
    });
};
