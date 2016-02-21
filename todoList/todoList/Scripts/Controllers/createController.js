angular.module('todoApp')
.controller('createController', ['$location', '$scope', 'todoFactory', function ($location, $scope, todoFactory) {
    $scope.btnOK = "Agregar";
    $scope.save = function (invalido) {
        if (!invalido) {
            todoFactory.save($scope.item, function () {
                $location.path('/');
            });
        }
    };
}]);