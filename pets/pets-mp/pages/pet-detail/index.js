// pages/pet-detail/index.js
import { getPetsDetailt } from '../../http/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchPetDetail(options.pid)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 请求宠物详情数据
  fetchPetDetail (pid) {
    getPetsDetailt({
      pid: pid
    }).then((res) => {
      this.setData({
        detail: res
      })
      wx.setNavigationBarTitle({
        title: res.name
      })
    })
  },

  // 微信分享
  shareMethod () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})