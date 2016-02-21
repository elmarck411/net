angular.module("todoApp")

.directive("ejSort", function () {
    return {
        restrict: 'E',
        scope: {
            critsel: "&",
            ordena: "&",
            reset: "&",
            desc: "&",
            critdir: "=critdir"
        },
        templateUrl: '/Scripts/Widgets/sortList.html'
    };
});