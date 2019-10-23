//index.js 
//获取应用实例
const app = getApp()
const log = "【index页面】"
Page({
  data: {
    authStatus: false, // 授权状态
    dialogOpen: false, // 授权结果
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindGotoHome: function() {
    let name = "【bindGotoHome】"
    console.info(log, name, '【跳转】')
    wx.navigateTo({
      url: '../home/home'
    })
  },
  bindUserInfoRequest: function(e) {
    let name = "【bindUserInfoRequest】"
    let msg = e.detail.errMsg
    if ("getUserInfo:ok" === msg) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: app.globalData.userInfo,
        dialogOpen: false
      })
      console.info(log, name, '【授权成功，赋值用户信息到全局和本地】')
      this.onLoad()
    } else {
      this.setData({
        dialogOpen: true
      })
      console.info(log, name, '【很遗憾，用户拒绝授权】')
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    let name = "【onLoad】"
    if (app.globalData.userInfo) {
      this.setData({
        authStatus: true,
        userInfo: app.globalData.userInfo
      })
      console.info(log, name, '【当前瞬间，全局变量有用户信息，从全局变量获得用户信息】')
    } else if (this.data.canIUse) {
      console.info(log, name, '【当前瞬间，全局变量没有用户信息，等待小程序主体app回调】')
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处定义一个 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          authStatus: true
        })
        console.info(log, name, '【回调后，本地就有了用户信息】')
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            authStatus: true
          })
        }
      })
      console.info(log, name, '【在没有 open-type=getUserInfo 版本的兼容处理】')
    }
  }
})