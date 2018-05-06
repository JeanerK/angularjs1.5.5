(function () {

    const app = angular.module('MemoList');

    app.controller('UserController', ['$scope', function ($scope) {
        $scope.jack = {
            name: 'Monica',
            age: 18
        }
    }]);
})();