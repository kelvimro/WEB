// app/routes/contato.js
module.exports = function (app) {
    var controller = app.controllers.serie;

    app.route('/series')
        .get(controller.listaSeries);
    app.route('/series/:id')
        .get(controller.byId);
    app.route('/series/:nome')
        .get(controller.byName);

};
