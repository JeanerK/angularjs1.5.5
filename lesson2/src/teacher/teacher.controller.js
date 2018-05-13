(function () {

    const app = angular.module('MemoList');

    app.controller('TeacherController', TeacherController);

    TeacherController.$inject = ['TeacherService'];

    function TeacherController(TeacherService) {

        const vm = this;

        vm.teacher = {
            teachAges: 20,
            restYear: 2030
        };

        vm.getTeachers = getTeachers;
        vm.postTeachers = postTeachers;

        vm.getTeachers();
        vm.postTeachers();

        function getTeachers() {
            TeacherService.queryTeachers().then(function (res) {
                debugger;
                vm.teachers = res.data;
            })
        }

        function postTeachers() {
            debugger;
            TeacherService.queryTeacherPostMethod().then(function (res) {
                vm.teacherPosts = res.data;
            })
        }
    }
})();