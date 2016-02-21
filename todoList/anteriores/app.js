var TodoApp = angular.module("todoApp", ["ngResource", 'ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/', { controller: ListCtrl, templateUrl: 'list.html' }).
            otherwise({ redirectTo: '/' });
    });

var ListCtrl = function ($scope, $location) {
    $scope.test = "testing";
};

TodoApp.factory('Todo', function ($resource) {
    return $resource('/api/todo/:id', { id: '@id' }, { update: { method: 'PUT' } });
});

var ListCtrl = function ($scope, $location, Todo) {
    $scope.items = Todo.query();
};