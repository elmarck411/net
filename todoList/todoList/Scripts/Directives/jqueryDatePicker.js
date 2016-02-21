angular.module('todoApp')

.directive("datepicker", ['$rootScope', function ($rootScope) {
    return {
        restrict: "A",
        require: "ngModel",
        scope:{
         modelo: "=modelo"
        },
        link: {
            post: function (scope, elem, attrs, ngModelCtrl) {
                var updateModel = function (dateText) {
                    scope.$apply(function () {
                        scope.modelo = dateText;
                        //ngModelCtrl.$setViewValue(dateText);
                    });
                };
                var options = {
                    dateFormat: "dd/mm/yy",
                    defaultDate: new Date(scope.modelo),
                    onSelect: function (dateText) {
                        updateModel(dateText);
                    }
                };
                elem.datepicker(options);
                //cuando haya cambio de ruta (navegacion), ocultar el datepicker, ya que si esta abierto y damos click en
                //el boton 'atras' del navegador, no se oculta
                $rootScope.$on("$routeChangeStart",
                function (event, current, previous) {
                   elem.datepicker("hide");
               });

            }
        },
    }
}]);
