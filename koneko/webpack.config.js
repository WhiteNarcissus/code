var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },
    // 试了好几次一般都 webpack  版本对应 的配置文件写法 不匹配导致
    plugins: [
     
      new VueLoaderPlugin()
  ],
  module: { //这个节点用于配置所有的第三方模块加载器
      rules: [
          {test: /\.vue$/, use: 'vue-loader'},
          {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },
        //处理css样式
        {
          test: /\.css$/,
          use: [
              {
                  loader: "style-loader"
              }, {
                  loader: "css-loader"
              }
          ]
      },
      //处理图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      //处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
      ]
  }
    ,mode:'development'

  }



