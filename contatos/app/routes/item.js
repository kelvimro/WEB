module.exports = function (app) {
    var controller = app.controllers.item;

    //organnizacao das rotas
    app.route('/api/itens')
        .get(controller.listaItens)
        .post(controller.addItem);

    app.route('/api/itens/:id')
        .get(controller.listaItemId)
        .delete(controller.deleteItem)
        .put(controller.updateItem);

    app.route('/api/additem')
        .get(controller.listaItens)
        .post(controller.addItem);

    
}