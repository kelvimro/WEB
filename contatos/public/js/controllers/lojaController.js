angular.module('itens')
  .controller('lojaController', ['$scope', '$http',
    function ($scope, $http) {
      $scope.total = 0;
      $scope.filtro = '';
      $scope.sortValue = 'nome';
      $scope.order = false;

      $scope.itens = [];

      $http.get('api/itens')
        .success(function (data) {
          $scope.itens = data;
        })
        .error(function (statusText) {
          console.log(statusText);
        });

      $scope.sort = sort;
      function sort (fild) {
        $scope.sortValue = fild;
        $scope.order = !$scope.order;
      }

      $scope.del = del;
      function del (id) {
        $http.delete('api/itens/' + id)
          .success(function () {
            console.log('item deletado com sucesso');

            $http.get('api/itens')
              .success(function (data) {
                $scope.itens = data;
              })
              .error(function (statusText) {
                console.log(statusText);
              });

          }).error(function (statusText) {
          console.log(statusText);
        });
      }

    }]);
