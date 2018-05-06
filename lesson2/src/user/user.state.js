(function () {
    const app = angular.module('MemoList');

    app.config(userRouter);

    function userRouter($stateProvider) {
        $stateProvider.state('user', {
            url: '/user',
            views: {
                'user': {
                    templateUrl: 'user/user.html',
                    controller: 'UserController'
                }
            }
        })
    }
})();