(function () {
    const app = angular.module('MemoList');

    app.filter('TeacherFilter', teacherFilter);

    teacherFilter.$inject = [];

    function teacherFilter() {
        return function(age, name, index) {
            if(age > 40) {
                return '第' + index + "位，人到中年：" + name;
            } else if (age < 40) {
                return '第' + index + "位，正值青年：" + name;
            }
        }
    }
})();