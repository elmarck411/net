angular.module('todoApp').
controller('listController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.test = "testing";
    $scope.filtroJS = '';
    $scope.limit = 20;
    $scope.sort_criteria = 'Priority';
    $scope.sort_desc = false;
    //$scope.items = todoFactory.query();

    //Hace busqueda solamente en el  rango de items cargados.
    $scope.search = function () {
        //no asignarlo a $scope.items, en el cuerpo de la funcion se asignan los items.
        todoFactory.query(
            { q: $scope.query, limit: $scope.limit, offset: $scope.offset, sort: $scope.sort_criteria, desc: $scope.sort_desc }, //solicitando una Url con parametros a traves del factory
            function (items) {                                                 //funcion callback on Success
                var cnt = items.length;
                $scope.no_more = cnt < 20;
                $scope.items = $scope.items.concat(items);
            }
        );
    };

    //Reiniciar valores para obtener los n primeros items
    $scope.reset = function () {
        $scope.offset = 0;
        $scope.items = [];
        $scope.search();
    };
    //No $scope.show_more = !$scope.no_more;, ya que esto lo haria solo una vez
    $scope.show_more = function () { return !$scope.no_more; };

    //Ordenamiento (sorting)
    //Si es el mismo criterio que el anterior, cambiar de descendente a ascendente o viceversa, si no reiniciarlo a orden ascendente
    $scope.sort_by = function (ord) {
        if ($scope.sort_criteria == ord) { $scope.sort_desc = !$scope.sort_desc }
        else { $scope.sort_desc = false;}
        $scope.sort_criteria = ord;
       
    };
    //Regresa el criterio de seleccion actual
    $scope.critsel = function () { return $scope.sort_criteria; }

    //Regresa si el orden actual es ascendente o descendente
    $scope.desc = function () { return $scope.sort_desc; }

    //Eliminar un item
    $scope.delete = function () {
        var r = confirm("Esta Seguro de eliminar este elemento?");
        if (r == true) {
            var itemId = this.item.TodoItemId;
            todoFactory.delete({ id: itemId }, function () {
                $("#item_" + itemId).fadeOut();
            });
        } 

        


    };

    $scope.reset();


    //--------------------------------------------------------------------------
    //FUNCIONES DE ANGULARJS SIN HACER LLAMADAS AL SERVIDOR .
    //  Busqueda usando filtro definido en ng-repeat de list.html
    $scope.searchJS = function () {
        $scope.filtroJS = $scope.query;
    };
}])

    //ordenamiento de los items que esten mostrados actualmente.



.factory('$exceptionHandler', function () {
    return function (exception, cause) {
        exception.message += ' (caused by "' + cause + '")';
        throw exception;
    };
});