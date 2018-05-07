(function () {

    const app = angular.module('MemoList');

    app.controller('TeacherController', ['$scope',TeacherController]);

    function TeacherController($scope) {
        const vm = this;
        vm.jack = $scope.jack;
        console.log($scope);
        console.log(vm.jack);
        vm.teacher = {
            teachAges: 20,
            restYear: 2030
        };
    }
})();