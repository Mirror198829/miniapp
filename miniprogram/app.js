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
