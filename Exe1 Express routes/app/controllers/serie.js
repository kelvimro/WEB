// app/controllers/serie.js
var series = [
    {
        _id: 1, nome: 'Primeira serie',
        email: '1@serie.com.br'
    }, {
        _id: 2, nome: 'Segunda',
        email: '2@serie.com.br'
    }, {

        _id: 3, nome: 'Terceira serie',
        email: '3@serie.com.br'
    }, {

        _id: 4, nome: 'Quarta serie',
        email: '4@serie.com.br'
    }, {

        _id: 5, nome: 'Quinta serie',
        email: '5@serie.com.br'
    }];

module.exports = function () {
    var controller = {};

    controller.listaSeries = function (req, res) {
        res.json(series);
    };
    
    controller.byId = function (req, res) {
        var idSerie = req.params.id;
        var serie = series.filter(function (serie) {
            return serie._id == idSerie;
        })[0];
        serie ?
            res.json(serie) :
            res.status(404).send('ID da serie não encontrado');
    };

    controller.byName = function (req, res) {
        var nomeSerie = req.params.nome;
        var serie = series.filter(function (serie) {
            return serie.nome == nomeSerie;
        })[0];
        serie ?
            res.json(serie) :
            res.status(404).send('Nome da serie não encontrado');
    };
    return controller;
};



