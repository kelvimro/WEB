module.exports = function (app) {
  var controller = {};
  var Itens = app.models.item;

  /**
   * fucao que listas todos os contatos
   */
  controller.listaItens = function (req, res) {
    Itens.find().exec()
      .then(
        function (itens) {
          res.json(itens);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
    );

  };

  /**
   * funcao que lista o contato pelo id 
   */
  controller.listaItemId = function (req, res) {
    var _id = req.params.id;
    Itens.findById(_id).exec()
      .then(function (item) {
        if (!item) throw new Error('Item não encontrado');
        res.json(item);
      },
        function (erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
    );
  };

  /**
   * funcao que adciona um contato
   */
  controller.addItem = function (req, res) {
    var item = req.body;
    Itens.create(item,
      function (erro, item) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(item);
      });
  };

  controller.deleteItem = function (req, res) {
    var query = {'_id': req.params.id};
    Itens.remove(query, function (erro) {
      if (erro) {
        console.error(erro);
        res.status(500).json(erro);
      } else {
        res.status(204).end();
      }
    });
  };

  controller.updateItem = function (req, res) {
    var id = req.params.id;
    Itens.findByIdAndUpdate(id, req.body,
      function (erro, item) {
        if (erro) {console.error(erro);
          res.status(500).json(erro);} else {
          res.json(item);
        }
      });

  };

  return controller;
};
