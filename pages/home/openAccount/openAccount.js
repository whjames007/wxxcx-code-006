// pages/home/openAccount/openAccount.js
const app = getApp()
const log = "【openAccount页面】"
const utilSArea = require('../../../utils/area.js')
import Notify from '../../../vant/notify/notify';
import Toast from '../../../vant/toast/toast';
Page({

  /**
   * 页面的初始数据
   * "420000", provinceName: "湖北省", cityCode: "420100", cityName: "武汉市"
   */
  data: {
    accountName: null,
    provinceCode: '420000',
    provinceName: '湖北省',
    cityCode: '420100',
    cityName: '武汉市',
    areaValue: '420100',
    areaList: null
  },
  bindChangeName: function(event) {
    this.setData({
      accountName: event.detail
    })
  },
  bindconfirmArea: function(val) {
    let name = "【选定行政区域】"
    let list = val.detail.values
    this.setData({
      provinceCode: list[0].code,
      provinceName: list[0].name,
      cityCode: list[1].code,
      cityName: list[1].name
    })
    console.info(log, name, list)
  },
  bindSubmmit: function(event) {
    let name = "【提交表单】"
    console.info(log, name, this.data)
    Toast.success({
      mask: true,
      forbidClick: true,
      message: '提交成功，请等待管理员审核！',
      onClose: function () {
        wx.switchTab({
          url: '../home'
        })
        console.info(log, name, 111)
      }
    });
    const {
      type
    } = event.currentTarget.dataset;

    Notify({
      type,
      message: '提交成功，请等待管理员审核！'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let name = "【onReady】"
    this.setData({
      areaList: utilSArea.default
    })
    console.info(log, name, "【初始化行政区对象】", this.data.areaList)
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