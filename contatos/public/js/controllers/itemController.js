angular.module('itens')
  .controller('itemController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
      $scope.item = {};
      $scope.mensagem = '';

      if ($routeParams.id) {
        $http.get('api/itens/' + $routeParams.id)
          .success(function (item) {
            $scope.item = item;
          })
          .error(function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter';
          });
      }

      $scope.submeter = submeter;
      function submeter () {
        if ($scope.formulario.$valid) {
          if ($routeParams.id) {
            $http.put('/api/itens/' + $scope.item._id, $scope.item)
              .success(function () {
                $scope.mensagem = 'Item alterado com sucesso';
              }).error(function (erro) {
              console.log(erro);
              $scope.mensagem = 'Não foi possível alterar';
            });
          } else {
            $http.post('/api/itens', $scope.item)
              .success(function () {
                $scope.item = {};
                $scope.mensagem = 'Foto cadastrada com sucesso';
              })
              .error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível cadastrar a foto';
              }
            );
          }
        }
      }
    }]);
