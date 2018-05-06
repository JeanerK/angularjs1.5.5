(function () {

    const app = angular.module('MemoList');

    app.controller('TeacherController', TeacherController);

    function TeacherController() {
        const vm = this;

        vm.teacher = {
            teachAges: 20,
            restYear: 2030
        };
    }
})();