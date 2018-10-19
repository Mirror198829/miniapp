# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码
# 程序配置
|名称|内容|
|---|---|
|pages|页面路径|
|window|页面的窗口表现|
|tabBar|底部tab切换|
|networkTimeout||
|debug|debug模式|

# 生命周期
## App生命周期
可以通过‘真机调试’来观察app的生命周期
``` javascript
//app.js
App({
  //在小程序运行时启动
  onLaunch() {
    console.log(`onLanuch---小程序开始执行`)
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  },
  //每次从后台切换过来就会执行
  onShow(){
    console.log(`onShow---切换到小程序运行了`)
  },
  //每次切换到后台就会执行
  onHide(){
    console.log(`onHide---小程序被隐藏在后台运行`)
  }
})
```
## Page生命周期
## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

