angular.module('todoApp')
.directive("inputText", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            nombre: '=nombre',
            labeltext: '=labeltext',
            modelo: '=modelo',
            forma: "=forma"
        },
        templateUrl: '/Scripts/Widgets/inputText.html'
    };
});