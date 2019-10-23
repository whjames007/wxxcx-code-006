//app.js
const log = "【小程序主体app】"
App({
  globalData: {
    userInfo: null
  },
  methodGotoIndex: function () {
    let name = "【methodGotoIndex】"
    if (this.globalData.userInfo) {
      console.info(log, name, '【当前瞬间，全局变量有用户信息，可以停留】')
    } else {
      console.info(log, name, '【当前瞬间，全局变量没有用户信息，跳转】')
      wx.redirectTo({
        url: '../index/index'
      })
    }
  },
  onLaunch: function() {
    let name = "【onLaunch】"
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.info(log, name, '【登录】', res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          console.info(log, name, '【用户已经授权】')
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.info(log, name, '【获取用户信息并赋值到全局变量】')
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                console.info(log, name, '【执行回调userInfoReadyCallback】')
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          console.info(log, name, '【用户没有授权】', res)
        }
      }
    })
  }
})