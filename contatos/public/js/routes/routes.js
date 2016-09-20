angular.module('itens').config(['$routeProvider',function ($routeProvider) {

    $routeProvider.when('/itens', {
      templateUrl: 'partials/itens.html',
      controller: 'lojaController'
    });

    $routeProvider.when('/itens/new',{
      templateUrl: 'partials/formulario.html',
      controller: 'itemController'
    });

    $routeProvider.when('/itens/:id',{
      templateUrl: 'partials/formulario.html',
      controller: 'itemController'
    });

    $routeProvider.otherwise(
        {redirectTo: '/itens'});
  }]);
