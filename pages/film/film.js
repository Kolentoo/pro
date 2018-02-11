// pages/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mdetail: [],
    comming:[],
    top:[],
    america:[],
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
    let douban = 'https://douban.uieee.com';
    // let douban = 'https://liudongtushuguan.cn';
    wx.request({
      url: `${douban}/v2/movie/in_theaters`, 
      data: {
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        self.setData({
          mdetail:res.data.subjects
        });
        let md = self.data.mdetail;
        let sitem = wx.createSelectorQuery();
        let sm = sitem.select('#sitem');
      }
    });
    wx.request({
      url: `${douban}/v2/movie/coming_soon`,
      data: {
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        self.setData({
          comming: res.data.subjects
        })
      }
    });
    wx.request({
      url: `${douban}/v2/movie/top250`,
      data: {
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        self.setData({
          top: res.data.subjects 
        })
      }
    });
    wx.request({
      url: `${douban}/v2/movie/us_box`,
      data: {
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        self.setData({
          america: res.data.subjects
        })
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