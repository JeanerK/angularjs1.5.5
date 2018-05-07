(function () {
    const app = angular.module('MemoList');

    app.filter('TeacherFilter', teacherFilter);

    teacherFilter.$inject = [];

    function teacherFilter() {
        return function(param1) {
            return param1
        }
    }
})();