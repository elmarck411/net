angular.module('todoApp')

.directive("cmCreate", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            nombre: '=nombre',
            labeltext: '=labeltext',
            modelo: '=modelo',
            cad_val: '=cad_val',
            forma: "=forma"
        },
        templateUrl: '/Scripts/Widgets/createField.html'
    };
});