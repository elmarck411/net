angular.module('todoApp')
.controller('editController', ['$location', '$routeParams', '$scope', 'todoFactory', function ( $location, $routeParams, $scope, todoFactory) {
    $scope.btnOK = "Actualizar";
    $scope.item = todoFactory.get({ id: $routeParams.itemId }, function () {
        //Obtener la fecha en formato correcto hasta que se tenga la respuesta del servidor
        $scope.item.DueDate = $scope.item.DueDate == null ? "" : fechaSQLMx($scope.item.DueDate);

    });
 
    $scope.save = function (invalido) {
        if (!invalido) {

            $scope.item.DueDate = $scope.item.DueDate == "" ? null : fechaMxSQL($scope.item.DueDate);
            todoFactory.update({id: $scope.item.TodoItemId},$scope.item, function () {//Actualizacion del elemento con TodoItemId
                $location.path('/');
            });
        }
    };



  
    


}]);