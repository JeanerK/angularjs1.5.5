### 1.1 定义控制器的两种方式

#### A. 注入 `$scope` 服务的方式：

```javascript
const app = angular.module('MemoList');
app.controller('UserController', ['$scope', function ($scope) {
    $scope.jack = {
        name: 'Monica',
        age: 18
    }
}]);
```
使用这种写法时，angularjs将 `$scope` 这个服务注入到这个控制器，`$scope` 这个服务也可以看作是当前这个控制器运行的上下文环境，使用这种方式时，页面中不需要（也不能有）任何前缀就能访问 `$scope` 服务的属性和方法。

```javascript
$rootScope：全局作用域 
$scope：当前控制器作用域
```

#### B. 不注入 `$scope` 服务的方式

推荐使用这种写法。

```javascript
function TeacherController() {
  const viewModel = this;
  viewModel.teacher = {
    teachAges: 20,
    restYear: 2030
  };
}
```

使用这种写法时，需要限定控制器别名，也就是我们在***.state.js中使用的controllerAs，将控制器命名为 `vm` 

```javascript
---
templateUrl: 'teacher/teacher.html',
controller: 'TeacherController',
controllerAs: 'vm'
---
```


这种写法的原理是：在angularjs中，每一个控制器都是一个构造函数，必须要实例化以后才能调用（这也是为什么第二种写法的第一行代码是定义一个变量，并且赋值 `this` ），而 `controllerAs` 的作用就是，实例化这个控制器对象，并且赋给某个变量，可以理解为以下代码：


```javascript
const vm = new TeacherController();
```

这样才能在页面中通过 `vm` 这个变量使用其中的属性和方法。