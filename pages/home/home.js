// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mdetail: [],
    stars: [1,1,1,1,1],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 300,
    displayItem:2,
    indicatorDots:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters', 
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        self.setData({
          mdetail:res.data.subjects
        })
        console.log(self.data.mdetail);
        // let score = self.data.mdetail.rating.average;
        // console.log(score)
      }
    })
    console.log(this.data.stars)
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
  
  }
})