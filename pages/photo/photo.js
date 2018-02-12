// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos:[],
    photos1:[],
    photos2:[],
    count1:0,
    count2:0,
    key:'',
    tindex:'',
    types: ['明星','美女','动漫','宠物','设计','摄影'],
    status:[0,1,1,1,1,1]
  },
  changeType(e){
    this.setData({
      key: e.target.dataset.text,
      tindex: e.target.dataset.index
    });

    let self = this;
    let words = self.data.key;
    self.data.status.map((item,index)=>{
      if (index === self.data.tindex){
        self.setData({
          'status[index]':0
        });
      }else{
        self.setData({
          'status[index]':1
        });
      }
    });
    self.data.count1 = 0;
    self.data.count2 = 0;
    self.data.photos1 = [];
    self.data.photos2 = [];
    wx.request({
      url: `https://image.baidu.com/channel/listjson?pn=1&rn=30&tag2=%E5%85%A8%E9%83%A8&ie=utf8`,
      data: {
        'tag1': words
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        self.setData({
          photos: res.data.data
        });
        self.data.photos.map(item => {
          if (self.data.count1 <= self.data.count2) {
            self.setData({
              photos1: [...self.data.photos1, item.thumbnail_url],
              count1: self.data.count1 + 1
            });
          } else {
            self.setData({
              photos2: [...self.data.photos2, item.thumbnail_url],
              count2: self.data.count2 + 1
            });
          }
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    wx.request({
      url: `https://image.baidu.com/channel/listjson?pn=0&rn=30&tag2=%E5%85%A8%E9%83%A8&ie=utf8`,
      data: {
        'tag1':'明星'
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        self.setData({
          photos: res.data.data
        });
        self.data.photos.map(item =>{ 
          if (self.data.count1 <= self.data.count2){
            self.setData({
              photos1: [...self.data.photos1,item.thumbnail_url],
              count1:self.data.count1+1
            });
          }else{
            self.setData({
              photos2: [...self.data.photos2, item.thumbnail_url],
              count2: self.data.count2 + 1
            });
          }
        });
        console.log(res.data.data)
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