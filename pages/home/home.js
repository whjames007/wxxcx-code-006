// pages/home/home.js
const app = getApp()
const log = "【home页面】"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    imgUrls: [
      'https://6a61-james-song-001-cloud-7ff873-1257949111.tcb.qcloud.la/bluewater03.jpg?sign=3f35f1b7d9892f28c871fc4a1bba0e78&t=1541465603',
      'https://6a61-james-song-001-cloud-7ff873-1257949111.tcb.qcloud.la/bluewater04.jpg?sign=613dff5685f144b4fda851905f7f6657&t=1541465634',
      'https://6a61-james-song-001-cloud-7ff873-1257949111.tcb.qcloud.la/bluewater05.jpg?sign=b8f3746b67344c382f81545171f89952&t=1541465650',
      'https://6a61-james-song-001-cloud-7ff873-1257949111.tcb.qcloud.la/bluewater01.jpg?sign=020e5e30c792b9840940316317f956bb&t=1541465524',
      'https://6a61-james-song-001-cloud-7ff873-1257949111.tcb.qcloud.la/bluewater02.jpg?sign=21370482822b922c9cd89a0779661eec&t=1541465556'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  bindtapOpenAccount: function() {
    let name = "【bindtapOpenAccount】"
    console.info(log, name, '【开户方法】')
    wx.navigateTo({
      url: './openAccount/openAccount'
    })
    // wx.switchTab({
    //   url: '/pages/home/home'
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let name = "【onLoad】"
    app.userInfoReadyCallback2 = res => {
      this.setData({
        userInfo: res.userInfo,
        authStatus: true
      })
      console.info(log, name, '【userInfoReadyCallback2回调后，本地就有了用户信息】', res.userInfo)
    }
    app.methodGotoIndex2()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})