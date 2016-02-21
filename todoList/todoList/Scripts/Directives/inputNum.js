angular.module('todoApp')
.directive("inputNum", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            nombre: '=nombre',
            labeltext: '=labeltext',
            modelo: '=modelo',
            forma: "=forma"
        },
        templateUrl: '/Scripts/Widgets/inputNum.html'
    };
});