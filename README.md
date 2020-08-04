# learn-react
- jianshu.com/p/7ebac9cfc91e?tdsourcetag=s_pctim_aiomsg
- react、react-dom、antd、webpack 系列、babel、以及一堆loader
- demo
    - src  // 应用的所有代码
      - actions     // 处理异步请求
      - assets      // 静态资源
      - components  // 公用组件
      - pages       // 业务逻辑页面
      - reducers    // reducer 状态处理
      - util        // 公用方法
      - index.html  // 项目模板
      - index.js    // 项目入口
    - package.json      // npm init 自动生成
    - webpack.config.js // webpack 配置文件
- react是使用jsx编写，浏览器无法识别，所以需要一个编译工具，这里使用babel
- 添加babel配置文件
   - 在根目录下添加文件 .babelrc


   https://github.com/liuyangjike/react-elm/blob/master/src/pages/login/login.scss