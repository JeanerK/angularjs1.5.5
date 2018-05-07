### 1.2 定义一个服务

angularjs中的服务是什么？

angularjs中的服务是一个单例对象，也就是在整个应用运行期间，在内存中只有一份，服务的作用是根据业务逻辑封装为一个个功能并且对外提供服务。

angularjs内置了很多服务，比如最典型的 `$scope` ，（`$scope` 是单例服务，那么我们不停地将这个服务注入到不同的控制器中，并且不停地对这个服务进行修改，一个控制器的数据会不会被另一个控制器访问到呢？答案是不行的。但是我们自定义的服务可以在两个控制器之间传递数据。 ），`$http`  （用于发起 ajax 请求）。

angularjs中自定义服务的三种方式。

#### 1.2.1 factory



```javascript
const app = angular.module('MemoList');

//facotry() 函数是angular提供定义服务的函数。
app.factory('TeacherService', teahcerService);

teacherService.$inject = ['$http'];

function teahcerService ($http) {
  
  return {
    queryTeahcers: queryTeachers
  };
  
  function queryTeahcers () {
    let resourceUrl = 'teacher/teacher.json';
    return $http.get(resourceUrl, {}).then(function (data) {
      return data;
    }, function (err) {
      console.log(err);
    })
  }
}
```

​	使用   `factory()` 自定义一个服务的过程与定义一个控制器的过程基本相同，不再赘述。

与控制器不同的是：

​	定义上面服务时，我们 必须 **返回一个对象** ，在这个对象里面，我们封装了一个查询当前教师的这个功能，此时，我们将这个服务注入到 `TeacherController` 控制器（可以理解为将这个对象引用传递到这个控制器）中时，就可以使用查询当前老师这个功能。

​	`factory()` 函数是开发中最常用的自定义服务的函数，几乎可以满足所有需求。

### 1.2.2 service

```javascript
const app = angular.module('MemoList');

//service（） 是angularjs提供的自定义服务的另一个函数
app.service("TeacherService",constructorFun);

function constructorFun(){
    var myname = "code_bunny";
    var age = 12;
    var id = 1;
    this.name = myname;
    this.age = age;
    this.getId = function(){
        return id
    }
	}
}
```

​	通过service自定义服务时，第二个参数必须是一个构造函数。当我们将 serivce 方法定义的服务注入到 其它服务或者控制器时，被注入的服务是这个构造函数的实例。service可以创建的服务基本都可以用factory创建。

#### 1.2.3 provider

```javascript
app.provider("name",function(){
　　....
　　return {
　　　　...
　　　　$get:function(){
　　　　　　...
　　　　　　return obj
　　　　}
     }
})
```

​	通过 provider 定义的服务必须返回一个对象，并且这个对象里必须要的     `$get` 方法，`$get` 方法必须要返回一个对象；当我们将这个服务注入到其它服务或者控制器时，实际注入的就是 `$get` 方法返回的那个对象。

​	angularJs还提供了一个      `config()` 函数，config函数会在angularjs启动之前执行，因此一些基础配置，比如我们定义路由的时候。会放在这个函数中执行。在这个函数中，只能注入以   `provider()` 定义的服务，并且，需要的服务名后面跟上  `Provider` 后缀。例如上文中定义一个叫做  `name` 的服务，那么，这个服务注入  `config()` 函数时，格式如下：

demo1:

```javascript
app.config(NameConfig);

NameConfig.$inject = ['nameProvider'];

function NameConfig (nameProvider) {
  
  //do someThine with name provider
  
}
```

​	需要注意的是，factory() 和 service () 都是对 provider() 函数的二次包装。

​	provider() 是三种定义服务 函数中功能最为强大与灵活（灵活通常意味着不好掌握，你懂的）的。

下面再看一个例子：

demo2:

```javascript
app.provider("name",function(){
    var id = 1;
    return {
        setID:function(newID){
            id = newID
        },
        $get:function(){
            var myname = "code_bunny";
            var age = 12;
            return {
                name: myname,
                age: age,
                getId: function(){
                    return id
                }
            }
        }
    }
});
app.config(function(nameProvider){
    nameProvider.setID(2)
});
```

​	在这个例子中，这里的   `provider`服务不仅仅返回了  `$get` 方法,还返回了  `setID`方法,然后id变量是写在函数里的,返回值的外面,形成一个闭包，从而可以在这个服务被注入到其它服务或者控制器之前修改这个服务里面的值，从而达到服务更高的可用性。

​	需要注意的是：当且仅当在   `    config()`被注入的服务名不叫  `name` ,而是  `nameProvider` .然后在函数里面可以调用   `nameProvider`  的  `setID`方法(也就是 `name`的  `setID` 方法).

​	`angularjs` 有很多内置的服务都有这样的功能,比如  `$route` 服务,  `$location`  服务,当我们通过`$routeProvider` 和  `$locationProvider`来配置的时候,其本质就是这些服务是通过  `provider` 创建的。

​	我们在代码中使用的    `$stateProvider` 就是 `ui.router` 这个模块提供的通过  `provider` 创建的服务。

​	在其它服务或者控制器注入以 `provider` 定义的服务时，不需要在名称后面添加 `Provider` 后缀。