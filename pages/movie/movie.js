// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    // console.log(params)
    let douban = 'https://douban.uieee.com';
    // let douban = 'https://liudongtushuguan.cn';
    let self = this;
    let ugroup = getCurrentPages();
    let purl = ugroup[ugroup.length-1];
    let pid = purl.options.id;
    wx.request({
      // url: `${douban}/v2/movie/subject/259`,
      url: `${douban}/v2/movie/subject/${pid}`,
      data: {
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        self.setData({
          info: res.data
        });
        console.log(res.data)
      }
    });
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