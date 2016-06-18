var Datastore = require('nedb'),
    dbName = 'server/data.db',
    db;

if (!db) {
    db = new Datastore({
        filename: dbName,
        autoload: true
    });
    console.log('Banco ' + dbName + ' pronto para uso');
}

module.exports = db;
