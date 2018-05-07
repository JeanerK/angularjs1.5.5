(function () {
    const app = angular.module('MemoList');

    app.config(indexRouter);

    function indexRouter($stateProvider, $urlRouterProvider) {
        $stateProvider.state('app', {
            url: '/',
            views:{

            }
        });

        $urlRouterProvider.otherwise('/');
    }
})();