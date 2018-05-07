(function () {
    const app = angular.module('MemoList');

    app.service('TeacherService', teacherService);

    teacherService.$inject = ['$http'];

    function teacherService($http) {
        return {
            queryTeachers: queryTeachers,
            queryTeacherPostMethod: queryTeacherPostMethod
        };

        function queryTeachers() {
            let resourceUrl = 'teacher/teacher.json';
            return $http.get(resourceUrl, {}).then(function (data) {
                return data;
            }, function (err) {
                console.log(err);
            })
        }

        function queryTeacherPostMethod(data) {
            let resourceUrl = 'teacher/teacher.json';
            return $http.post(resourceUrl, data, {
                headers: {
                    'Content-Type': 'application/json;charset=utf8'
                }
            }).then(function (data) {
                return data;
            })
        }
    }
})();