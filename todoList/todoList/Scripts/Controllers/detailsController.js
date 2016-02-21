angular.module('todoApp').
controller('detailsController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.currentItem = todoFactory.get({id: 43 });
}]);