angular.module('todoApp')
.controller('createController', ['$location','$scope','todoFactory', function ($location,$scope,todoFactory) {
    $scope.save = function (invalido) {
        if (!invalido) {
            todoFactory.save($scope.item, function () {
                $location.path('/');
            });
        }
    };
}]);