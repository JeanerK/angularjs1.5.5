### 关于本目录：

本目录包含三个工程，分别为lesson1, lesson2, lesson3。使用了npm 和 bower 作为包管理器，所以需要在本地安装node.js运行环境。

​	安装完成以后，运行以下命令查看是否安装。

```
> node --version
> npm -v
```

​	正确输出版本号时，证明安装成功。

​	安装依赖工具。

```
> npm install -g cnpm --registry=https://registry.npm.taobao.org
> cnpm install bower -g
> cnpm install gulp -g
> cnpm install
> bower install
```

​	以下命令在全局安装了三个命令，     `cnpm` `bower` `gulp` ，并且将 `package.json` 以及 ` bower.json` 中定义的依赖下载到本地，其中，`cnpm install` 下载的内容保存在 `node_modules` 目录，`bower install` 下载的内容保存在 `bower_components` 目录。

### 1.1.1定位到目标工程

```
> cd lesson1/2/3
> gulp serve
```

​	每个工程运行      `gulp serve` 命令时，会生成一个 `dest` 目录，这就是我们最终生成的应用。