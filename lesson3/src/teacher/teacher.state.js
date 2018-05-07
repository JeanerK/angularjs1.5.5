(function () {
    const app = angular.module('MemoList');

    app.config(teacherRouter);

    teacherRouter.$inject = ['$stateProvider'];

    function teacherRouter($stateProvider) {
        $stateProvider.state('teacher', {
            url: '/teacher',
            views: {
                'teacher': {
                    templateUrl: 'teacher/teacher.html',
                    controller: 'TeacherController',
                    controllerAs: 'vm',
                    resolve: {
                        entity: function() {
                            return {
                                name: 'John'
                            }
                        }
                    }
                }
            }
        })
    }
})();