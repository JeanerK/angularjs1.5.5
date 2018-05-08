### 1.3 定义一个过滤器

angularjs中的过滤器是什么？

angularjs中的过滤器是一个格式化输出工具，它的作用是将一定格式的数据处理以后显示在页面上，可以看做一种特殊的服务。



#### 1.3.1 filter

```javascript
const app = angular.module('MemoList');

//filter() 函数是angular提供定义过滤器的函数。
app.filter('TeacherFilter', TeacherFilter);

TeacherFilter.$inject = [];

function TeacherFilter () {
  
  return function (param1, param2...) {
    //根据业务需要返回相就数据。可以是对象，可以是字符串等等
    return obj;
  };
}
```

​	`filter` 函数是   `angularjs` 提供我们自定义过滤器的函数。

​	使用方法见上。需要注意的是，一个过滤器只会返回一个函数，并且这个函数里面要返回值。过滤器里面可以注入服务。

#### 1.3.2 filter in html

​	过滤器一般有在   `html` 页面中，具体使用方法如下：

demo:

```html
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>

<body>

<div ng-app="myApp" ng-controller="myCtrl">
  {{ oldMonkey.name | reverse: oldMonkey.age }}
  	<br>
	{{youngMonkey.name | reverse: youngMonkey.age}}
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.oldMonkey = {
      name: 'Ming',
      age: 35
    };
  	$scope.youngMonkey = {
      name: 'Wang',
      age: 22
    }
});
app.filter('reverse', function() { //可以注入依赖
    return function(name, age) {
      if (age > 30) {
        return "上个世纪的老人: " + name;
      } else if (age < 30) {
        return "即将变成上个世纪的老人："+ name
      }
    }
});
</script>

</body>
</html>
```

​	在上面这个页面中，我们定义了一个过滤器，这个过滤器接收两个参数。

​	在页面用法如下：

```html
<div ng-app="myApp" ng-controller="myCtrl">
  {{ oldMonkey.name | reverse: oldMonkey.age }}
  	<br>
	{{youngMonkey.name | reverse: youngMonkey.age}}
</div>
```

​	过滤器可以通过一个管道字符（|）添加到表达式中，也可以，通过一个管道字符（|）添加到指令（包括内置指令以及其它自定义指令）中。

​	其中，管道字符（|）前面的内容是需要被过滤的内容，管道字符（|）后面的内容是过滤器以及过滤器需要的参数，过滤器在页面接收参数有点特别：

​	过滤器的第一个参数是管道字符（|）前面的内容，其它参数在过滤器后面通过   `:` 分隔开。

​	如：

```html
<div ng-app="myApp" ng-controller="myCtrl">
姓名: {{ msg | reverse: 'hello':'world' }}
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.msg = "Runoob";
});
app.filter('reverse', function() { //可以注入依赖
    return function(text,hello, world) {
        return text.split("").reverse().join("") +" "+ hello +' '+ world;
    }
});
</script>
```