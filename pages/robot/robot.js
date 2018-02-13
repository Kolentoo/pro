// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    dialog:[
      { types: 'robot', text:'HI',question:''}
    ],
    kwords:'',
    toView: '#',
    scroll:false
  },
  words(e){
    this.setData({
      kwords:e.detail.value
    });
  },
  send(){
    let self = this;
    this.setData({
      dialog: [...this.data.dialog, {types:'user',text:'',question: this.data.kwords}],
      scroll:false
    });
    this.setData({
      kwords: ''
    });
    wx.request({
      url: `https://www.tuling123.com/openapi/api`,
      data: {
        "key":"f0e9368e77744a66a0dcee85a01ed62e",
        "info": this.data.kwords,
        "loc":"",
        "userid":"123456"
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res)
        let answer = res.data.text;
        self.setData({
          dialog: [...self.data.dialog, { types: 'robot', text: answer, question:''}],
          scroll: true
        });
        setTimeout(() => {
          self.setData({
            toView: 'sao',
          });
        }, 200)
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用应用实例的方法获取全局数据  
    let self = this;
    wx.getUserInfo({
      success: function (res) {
        self.setData({
          userInfo: res.userInfo.avatarUrl
        });
      }
    })
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