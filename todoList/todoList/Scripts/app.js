angular.module('todoApp', ['ngResource', 'ngRoute'])

.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'list.html',
        controller: 'listController'
    })
    .when('/details', {
        templateUrl: 'details.html',
        controller: 'detailsController'
    })
    .when('/new', {
        templateUrl: 'create.html',
        controller: 'createController'
    })
     .when('/edit/:itemId', {
         templateUrl: 'create.html',
         controller: 'editController'
     });
})

.factory('todoFactory', ['$resource', function ($resource) {
    return $resource('api/todo/:id', {}, { update: { method: 'PUT' } }); //*se reemplazo {id: '@ide'} por {} en el segundo parametro, tambien funciono
}]);
