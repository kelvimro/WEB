angular.module('meusComponentes', [])
  .directive('meuPainel', function () {
    var directive = {};

    directive.restrict = 'EA';

    directive.scope = {
      titulo: '@',
      mensagem: '@'
    };

    directive.templateUrl = 'js/templates/painel.html';

    return directive;
  }
);