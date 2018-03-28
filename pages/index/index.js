//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    greet:'Hello',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nt:false
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  notice(){
    if(this.data.nt==false){
      this.setData({
        nt:true
      });
    }else{
      this.setData({
        nt: false
      });
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    let myDate = new Date();
    let ntime = myDate.getHours();
    if(6<ntime&&ntime<12){
      this.setData({
        greet:'Sunshine '
      });
    }else if(12<ntime&&ntime<18){
      this.setData({
        greet: 'Passion'
      });
    }else if(18<ntime&&ntime<22){
      this.setData({
        greet: 'Enjoy'
      });
    }else{
      this.setData({
        greet: 'Lullaby'
      });
    }
    setTimeout(() => {
      this.setData({
        show1: '1'
      })
    }, 1000);
    setTimeout(() => {
      this.setData({
        show2: '1'
      })
    }, 600);
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
